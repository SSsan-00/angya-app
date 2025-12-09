# 環境構築
## プロジェクトの初期化
```
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

## GitHubへの登録
```
git init

// 無駄なファイルが紛れていないかを確認して適宜.gitignoreへ登録
git status

// 初回コミット
git add .
git commit -m "任意のメッセージ"

// GitHubにリポジトリを作成してプッシュする
// 下記にアクセスして新しいリポジトリを作成する(gitignore, READMEはチェックを外す)
https://github.com/new

// 下記のコマンドをターミナル上で叩く(カレントディレクトリはプロジェクトのルートで)
git remote add origin https://github.com/SSsan-00/angya-app.git // リポジトリのあるパス
git branch -M main
git push -u origin main
```