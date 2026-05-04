import { describe, it, expect } from "vitest";
import { cosineSimilarity } from "./embeddings";

describe("cosineSimilarity", () => {
  it("returns 1 for identical vectors", () => {
    const v = [1, 2, 3, 4];
    expect(cosineSimilarity(v, v)).toBeCloseTo(1, 10);
  });

  it("returns 0 for orthogonal vectors", () => {
    const a = [1, 0, 0];
    const b = [0, 1, 0];
    expect(cosineSimilarity(a, b)).toBeCloseTo(0, 10);
  });

  it("returns -1 for opposite vectors", () => {
    const a = [1, 2, 3];
    const b = [-1, -2, -3];
    expect(cosineSimilarity(a, b)).toBeCloseTo(-1, 10);
  });

  it("returns 0 for mismatched lengths", () => {
    expect(cosineSimilarity([1, 2], [1, 2, 3])).toBe(0);
  });

  it("returns 0 for zero vectors", () => {
    expect(cosineSimilarity([0, 0, 0], [1, 2, 3])).toBe(0);
  });

  it("computes correct similarity for arbitrary vectors", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const dot = 1 * 4 + 2 * 5 + 3 * 6; // 32
    const normA = Math.sqrt(1 + 4 + 9); // sqrt(14)
    const normB = Math.sqrt(16 + 25 + 36); // sqrt(77)
    const expected = dot / (normA * normB);
    expect(cosineSimilarity(a, b)).toBeCloseTo(expected, 10);
  });

  it("handles single-element vectors", () => {
    expect(cosineSimilarity([5], [5])).toBeCloseTo(1, 10);
    expect(cosineSimilarity([5], [-5])).toBeCloseTo(-1, 10);
  });

  it("handles empty vectors", () => {
    expect(cosineSimilarity([], [])).toBe(0);
  });
});