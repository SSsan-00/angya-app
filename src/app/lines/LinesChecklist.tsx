// Next.js(App Router)でクライアントコンポーネントとして利用する
"use client";

// ダミー路線データ
// 後にDBから取得するように変更予定するように変更予定
type Line = {
    id: string;
    name: string;
}

// ダミー路線が3本以上
const DUMMY_LINES: Line[] = [
    { id: "higashiyama", name: "東山線" },
    { id: "meijo", name: "名城線" },
    { id: "sakuradori", name: "桜通線" },
];

export function LinesChecklist() {
    return (
        <section className="space-y-4">
            {/* テストで固定した見出し */}
            <h1 className="text-xl font-bold">路線一覧</h1>

            {/* チェックリスト 要件: checkbox + label */}
            <ul className="space-y-2">
                {DUMMY_LINES.map((line) => {
                    const checkboxId = `line-${line.id}`;
                    return (
                        <li key={line.id} className="flex items-center gap-2">
                            <input
                                id={checkboxId}
                                type="checkbox"
                                className="h-4 w-4"
                                // 現時点では状態を持たない (あとでトグル機能を追加予定)
                            />
                            <label htmlFor={checkboxId} className="select-none">
                                {line.name}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}