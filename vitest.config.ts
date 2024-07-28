import Vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
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
