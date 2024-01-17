import type { Sitemap } from "@/src/runtime/api/sitemap-routes"

export default defineEventHandler(() => {
  /** Тестовая карта сайта */
  const sitemap: Sitemap = {
    entity: [{ slug: "slug" }, { slug: "second-slug" }],
    secondEntity: [{ slug: "slug" }, { slug: "second-slug" }],
  }

  return sitemap
})
