import { $fetch, setup } from "@nuxt/test-utils/e2e"
import { fileURLToPath } from "node:url"
import { describe, expect, test } from "vitest"

// @vitest-environment node

// eslint-disable-next-line vitest/valid-describe-callback
describe("Эндпоинт Sitemap", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../fixtures/basic", import.meta.url)),
  })

  test("Правильный формат данных", async () => {
    const sitemap = await $fetch("/api/sitemap-routes")

    expect(sitemap).toMatchInlineSnapshot(`
      [
        {
          "_i18nTransform": true,
          "loc": "entity/slug",
        },
        {
          "_i18nTransform": true,
          "loc": "entity/second-slug",
        },
        {
          "_i18nTransform": true,
          "loc": "secondEntity/slug",
        },
        {
          "_i18nTransform": true,
          "loc": "secondEntity/second-slug",
        },
      ]
    `)
  })
})
