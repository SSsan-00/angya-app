// CIでvitestを用いてテストが通るかを確認するだけのテスト
import { describe, it, expect } from "vitest";

describe("CI Sanity", () => {
    it("vitest is working", () => {
        expect(true).toBe(true);
    })
});