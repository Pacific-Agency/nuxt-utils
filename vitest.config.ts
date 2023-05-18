import Vue from "@vitejs/plugin-vue"
import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    Vue({
      script: {
        defineModel: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "happy-dom",
    globals: true,
  },
})
