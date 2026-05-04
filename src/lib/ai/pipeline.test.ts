import { describe, it, expect, vi } from "vitest";
import { PipelineRunner } from "./pipeline";
import { cosineSimilarity } from "../grants/embeddings";

// Mock the AI gateway to avoid real API calls
vi.mock("./gateway", () => {
  return {
    AIGateway: vi.fn().mockImplementation(function (this: any) {
      this.generateObject = vi.fn();
      this.generateEmbedding = vi.fn();
    }),
  };
});

// Mock DB to avoid real DB calls
vi.mock("../db/client", () => ({
  getDb: vi.fn(() => ({
    insert: vi.fn(() => ({ values: vi.fn(() => Promise.resolve()) })),
  })),
}));

describe("PipelineRunner", () => {
  it("can be instantiated", () => {
    const runner = new PipelineRunner();
    expect(runner).toBeDefined();
  });

  it("cosine similarity orders relevant programs higher", () => {
    // Simulate what the retrieval stage does: pseudo-embed and rank
    const profileText = "Ontario technology startup with R&D activities";
    const programs = [
      { id: "sred", text: "federal R&D tax credit for technology companies" },
      { id: "cdap", text: "digital adoption program for small businesses" },
      { id: "agri", text: "agriculture innovation funding for farming" },
    ];

    // Use deterministic pseudo-embedding logic from gateway
    function pseudoEmbed(text: string): number[] {
      const dim = 256;
      const vec = new Array(dim).fill(0);
      const words = text.toLowerCase().split(/\s+/);
      for (const word of words) {
        for (let i = 0; i < word.length; i++) {
          const idx = (word.charCodeAt(i) * 31 + i) % dim;
          vec[idx] += 1;
        }
      }
      const norm = Math.sqrt(vec.reduce((s: number, v: number) => s + v * v, 0)) || 1;
      return vec.map((v: number) => v / norm);
    }

    const profileEmb = pseudoEmbed(profileText);
    const scored = programs.map((p) => ({
      id: p.id,
      similarity: cosineSimilarity(profileEmb, pseudoEmbed(p.text)),
    }));
    scored.sort((a, b) => b.similarity - a.similarity);

    // SR&ED (R&D tax credit) should rank higher than agriculture for a tech R&D company
    const sredRank = scored.findIndex((s) => s.id === "sred");
    const agriRank = scored.findIndex((s) => s.id === "agri");
    expect(sredRank).toBeLessThan(agriRank);
  });
});