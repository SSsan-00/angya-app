import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LinesCheckList } from "./LinesChecklist";

describe("LinesCheckList", () => {
    it("見出しが表示されること", () => {
        render(<LinesCheckList />);

        // 見出しが表示されていることを確認
        expect(screen.getByRole("heading", { name: "路線一覧" })).not.toBeNull();
    });

   it("ダミー路線が表示されること", () => {
        render(<LinesCheckList />);

        // ダミー路線が表示されていることを確認
        expect(screen.getByText("東山線")).not.toBeNull();
        expect(screen.getByText("名城線")).not.toBeNull();
        expect(screen.getByText("桜通線")).not.toBeNull();

        // ダミー路線のチェックボックスが表示されていることを確認（3つ以上）
        const checkboxes = screen.getAllRole("checkbox");
        expect(checkboxes.length).toBeGreaterThanOrEqual(3);
   });
});