import Vue from "@vitejs/plugin-vue"
import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "happy-dom",
    globals: true,
    sequence: {
      concurrent: true,
    },
    setupFiles: ["tests/setup.ts"],
  },
})
