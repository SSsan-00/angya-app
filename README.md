# 行脚アプリ要件定義
## プログラミング言語・フレームワーク
  - TypeScript
  - Tailwind CSS
  - Next.js
## DB
  - Supabase(PostgresSQL)
## パッケージマネージャ
  - pnpm
## テストフレームワーク
  - Vitest
  - React Testing Library
## CI/CD
  - Github Actions
## デプロイ先
- Vercel
## エディタ
- vscode
## その他
- TDDでスモールステップで進める
- 開発を共有できるように環境がある程度整ったらDockerファイルを作成する
	- 開発ログとして0から環境を0から作成する手順も記録していく
- npmサプライチェーン攻撃対策を必ず行う
- その他セキュリティの脆弱性を生まないように細心の注意を払う

## 環境構築
```
// プロジェクトの初期化
pnpm dlx create-next-app@latest angya-app \
	—typescript \
	—tailwind \
	—eslint \
	—app \
	—src-dir false \
	—import-alias “@/*”

cd angya-app

// パッケージのインストール
pnpm install
// サーバーの起動
pnpm dev

// 以下のパスにブラウザでアクセス(動作確認)
http://localhost:3000
```