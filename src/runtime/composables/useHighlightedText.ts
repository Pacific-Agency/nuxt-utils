/**
 * Возвращает строку с указанным текстом, выделенным с помощью HTML-тегов `<mark>`.
 *
 * @param text - текст строки, в которой нужно выделить текст.
 * @param query - текст, который нужно выделить.
 * @returns Строка для рендера с тегами `<mark>`.
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-highlighted-text.html
 */
export default function (text: string, query: string) {
  /**
   * Регулярное выражения для выделения строки.
   *
   * Скобки `()` - группируют символы в подвыражения.
   * `gi` - флаги, означающие:
   * - `g` - глобальный поиск (т.е. не останавливаться после первого совпадения);
   * - `i` - игнорировать регистр символов.
   */
  const regex = new RegExp(`(${query})`, "gi")

  /** Строка с добавленными тегами `<mark>` */
  return text.replace(regex, (match) =>
    match ? "<mark>" + match + "</mark>" : match,
  )
}
