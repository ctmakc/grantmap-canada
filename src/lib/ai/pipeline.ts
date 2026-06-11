import { z } from "zod";
import { AIGateway } from "./gateway";
import { CompanyProfileSchema, GrantMatchSchema, ApplicationDraftSchema } from "./schemas";
import type { CompanyProfile, GrantMatch, ApplicationDraft } from "./schemas";
import { getPrograms, getProgramById } from "../grants/loader";
import { cosineSimilarity } from "../grants/embeddings";

interface PipelineState {
  profileId: string;
  rawInput: Record<string, unknown>;
  enrichedProfile?: CompanyProfile;
  candidates?: string[];
  matches?: GrantMatch[];
  drafts?: ApplicationDraft[];
  currentStage: number;
  error?: string;
}

export class PipelineRunner {
  private gateway: AIGateway;

  constructor() {
    this.gateway = new AIGateway();
  }

  async run(rawInput: Record<string, unknown>, profileId: string): Promise<PipelineState> {
    const state: PipelineState = { profileId, rawInput, currentStage: 0 };

    try {
      // Stage 1: Profile Ingestion
      state.currentStage = 1;
      state.enrichedProfile = await this.ingestProfile(rawInput);

      // Stage 2: Candidate Retrieval
      state.currentStage = 2;
      state.candidates = await this.retrieveCandidates(state.enrichedProfile);

      // Stage 3: Scoring & Ranking
      state.currentStage = 3;
      state.matches = await this.scoreAndRank(state.enrichedProfile, state.candidates);

      // Stage 4: Application Draft (top 3)
      state.currentStage = 4;
      const topMatches = state.matches.slice(0, 3);
      state.drafts = await this.generateDrafts(state.enrichedProfile, topMatches);

      state.currentStage = 5; // complete
    } catch (err) {
      state.error = err instanceof Error ? err.message : String(err);
    }

    return state;
  }

  private async ingestProfile(raw: Record<string, unknown>): Promise<CompanyProfile> {
    const prompt = `Parse this Canadian company profile into a structured format. Infer missing fields where possible from the provided data. If a field cannot be inferred, use reasonable defaults.

Company data:
${JSON.stringify(raw, null, 2)}

Rules:
- If industry is described in words, map to closest NAICS code
- If employee count is a range, use the midpoint
- If province is a full name, convert to 2-letter code
- Infer isStartup from foundingYear (< 5 years = true)
- Infer rdActivity from industry/sector if not specified (tech/manufacturing with R&D mention = true)
- Infer exportActivity if not specified (default false)`;

    return this.gateway.generateObject(CompanyProfileSchema, prompt);
  }

  private async retrieveCandidates(profile: CompanyProfile): Promise<string[]> {
    const profileText = `${profile.industryDescription} ${profile.sector} company in ${profile.province} with ${profile.employeeCount} employees, revenue $${profile.annualRevenueCdn} CAD. Founded ${profile.foundingYear}. R&D: ${profile.rdActivity}. Exports: ${profile.exportActivity}. Demographics: ${profile.founderDemographics.join(", ")}`;

    const profileEmbedding = await this.gateway.generateEmbedding(profileText);
    const programs = getPrograms();

    const scored = programs.map((program) => {
      const similarity = cosineSimilarity(profileEmbedding, program.embedding);
      return { id: program.id, similarity };
    });

    scored.sort((a, b) => b.similarity - a.similarity);
    return scored.slice(0, 30).map((s) => s.id);
  }

  private async scoreAndRank(profile: CompanyProfile, candidateIds: string[]): Promise<GrantMatch[]> {
    const candidates = candidateIds.map((id) => getProgramById(id)).filter(Boolean);

    const prompt = `You are a Canadian grant eligibility expert. Given this company profile and a list of grant programs, score each program's eligibility (0-100) and provide detailed reasoning.

Company Profile:
${JSON.stringify(profile, null, 2)}

Grant Programs:
${candidates.map((c, i) => `${i + 1}. ${c!.name} (ID: ${c!.id}): ${c!.eligibilitySummary}`).join("\n")}

For each program, provide:
- eligibilityScore (0-100): How likely is this company to qualify?
- expectedAmountMin/Max: Realistic funding range in CAD
- complexity: How complex is the application? (simple/moderate/complex)
- deadline: Next deadline date or null if ongoing
- reasoning: Step-by-step chain explaining the score
- keyRequirements: What the applicant must address

Return ONLY programs where eligibilityScore >= 30, sorted by score descending.`;

    const result = await this.gateway.generateObject(
      z.array(GrantMatchSchema),
      prompt
    );

    return result.sort((a, b) => b.eligibilityScore - a.eligibilityScore);
  }

  private async generateDrafts(profile: CompanyProfile, matches: GrantMatch[]): Promise<ApplicationDraft[]> {
    const drafts: ApplicationDraft[] = [];

    for (const match of matches) {
      const program = getProgramById(match.programId);
      if (!program) continue;

      const prompt = `Write a draft grant application for this Canadian company applying to the ${match.programName} program.

Company Profile:
${JSON.stringify(profile, null, 2)}

Program Requirements:
${program.application?.applicationRequirements || "Standard federal grant application"}

Key Eligibility Points to Address:
${match.keyRequirements.join("\n")}

Guidelines:
- Write in formal "grant-officer register" — professional, specific, evidence-based
- Quantify all claims with specific numbers where possible
- Address each eligibility criterion explicitly
- Use Canadian English spelling
- Each section should be 150-300 words`;

      const draft = await this.gateway.generateObject(ApplicationDraftSchema, prompt);

      draft.programId = match.programId;
      draft.programName = match.programName;
      drafts.push(draft);
    }

    return drafts;
  }
}