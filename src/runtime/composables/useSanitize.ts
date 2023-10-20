import { sanitize } from "isomorphic-dompurify"

/**
 * Данная функция нужна для очистки HTML-кода, полученного от API.
 *
 * Благодаря ей код можно использовать в v-html, не боясь XSS-атаки.
 *
 * @param html - HTML-код, который необходимо очистить.
 * @returns очищенный HTML-код.
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-sanitize.html
 */
export default function (html: string | undefined) {
  // Возвращаем очищенный HTML-код
  return sanitize(html ?? "", { USE_PROFILES: { html: true } })
}
