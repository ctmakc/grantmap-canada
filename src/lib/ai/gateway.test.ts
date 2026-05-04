import { describe, it, expect, vi, beforeEach } from "vitest";
import { AIGateway } from "./gateway";

// Mock the DB module to avoid real DB calls during tests
vi.mock("../db/client", () => ({
  getDb: vi.fn(() => ({
    insert: vi.fn(() => ({ values: vi.fn(() => Promise.resolve()) })),
  })),
}));

describe("AIGateway", () => {
  let gateway: AIGateway;

  beforeEach(() => {
    gateway = new AIGateway();
  });

  describe("pseudoEmbed", () => {
    it("produces a 256-dimensional normalized vector", () => {
      // Access private method via any for testing
      const gatewayAny = gateway as any;
      const vec = gatewayAny.pseudoEmbed("hello world test");
      expect(vec.length).toBe(256);
      const norm = Math.sqrt(vec.reduce((s: number, v: number) => s + v * v, 0));
      expect(norm).toBeCloseTo(1, 5);
    });

    it("is deterministic for same input", () => {
      const gatewayAny = gateway as any;
      const a = gatewayAny.pseudoEmbed("Ontario tech startup");
      const b = gatewayAny.pseudoEmbed("Ontario tech startup");
      expect(a).toEqual(b);
    });

    it("produces different vectors for different inputs", () => {
      const gatewayAny = gateway as any;
      const a = gatewayAny.pseudoEmbed("technology company");
      const b = gatewayAny.pseudoEmbed("agriculture farm");
      let dot = 0;
      for (let i = 0; i < a.length; i++) dot += a[i] * b[i];
      // Different topics should not be identical
      expect(Math.abs(dot)).toBeLessThan(0.99);
    });

    it("handles empty string", () => {
      const gatewayAny = gateway as any;
      const vec = gatewayAny.pseudoEmbed("");
      expect(vec.length).toBe(256);
      // Zero vector normalizes to zero
      const norm = Math.sqrt(vec.reduce((s: number, v: number) => s + v * v, 0));
      expect(norm).toBe(0);
    });
  });
});