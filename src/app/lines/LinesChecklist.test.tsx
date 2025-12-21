import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinesChecklist } from "./LinesChecklist";

describe("LinesCheckList", () => {
    it("見出しが表示されること", () => {
        render(<LinesChecklist />);

        // 見出しが表示されていることを確認
        expect(screen.getByRole("heading", { name: "路線一覧" })).toBeTruthy();
    });

   it("ダミー路線が表示されること", () => {
        render(<LinesChecklist />);

        // ダミー路線が表示されていることを確認
        expect(screen.getByText("東山線")).toBeTruthy();
        expect(screen.getByText("名城線")).toBeTruthy();
        expect(screen.getByText("桜通線")).toBeTruthy();

        // ダミー路線のチェックボックスが表示されていることを確認（3つ以上）
        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes.length).toBeGreaterThanOrEqual(3);
   });
});