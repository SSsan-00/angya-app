import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // React Testing Libraryを使用するための設定
    environment: "jsdom",

    // jest-domのマッチャーを使用するための設定
    setupFiles: ["./vitest.setup.ts"],
  },
});
