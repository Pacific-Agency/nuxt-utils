/**
 * Данный серверный эндпоинт нужен для генерации Sitemap.
 *
 * Он делает запрос на эндпоинт с бекенда, преобразует данные в формат для Sitemap и возвращает список страниц.
 *
 * @see https://pacific-agency.github.io/nuxt-utils/api/sitemap.html
 */
export default eventHandler(async () => {
  /** Ответ от эндпоинта `/sitemap/` */
  type Sitemap = Record<
    string,
    [
      {
        /** `slug` сущности */
        slug: string
      }
    ]
  >

  /** Карта сайта от API */
  const data = await $fetch<Sitemap>("/sitemap/", {
    baseURL: useRuntimeConfig().public.apiBase,
  })

  /** Массив всех ссылок */
  const routes = Object.entries(data)
    .map(([entity, slugsArray]) =>
      slugsArray.map((item) => `${entity}/${item.slug}`)
    ) // `entity` — название сущности, `slugsArray` — массив слагов
    .reduce((acc, val) => acc.concat(val), []) // Объединение массивов. `acc` - аккумулятор, `val` - текущее значение

  return routes
})
