import { useRuntimeConfig } from "#imports"
import { eventHandler } from "h3"

/** Ответ от эндпоинта `/sitemap/` */
export type Sitemap = Record<
  string,
  {
    /** `slug` сущности */
    slug: string
  }[]
>

/**
 * Данный серверный эндпоинт нужен для генерации Sitemap.
 *
 * Он делает запрос на эндпоинт с бекенда, преобразует данные в формат для Sitemap и возвращает список страниц.
 *
 * @see https://pacific-agency.github.io/nuxt-utils/api/sitemap.html
 */
export default eventHandler(async () => {
  /** Карта сайта от API */
  const data = await $fetch<Sitemap>("/sitemap/", {
    baseURL: useRuntimeConfig().public.apiBase as string,
  }).catch(() => {
    return []
  })

  // Возвращаем массив всех ссылок
  return Object.entries(data).flatMap(([entity, slugsArray]) =>
    slugsArray.map((item) => {
      return { _i18nTransform: true, loc: `${entity}/${item.slug}` }
    })
  )
})
