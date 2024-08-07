/**
 * Функция, возвращающая форматированную цену.
 *
 * @param price - цена
 * @returns форматированная цена
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-price-formatter.html
 * @example
 * ```ts
 * // Вернет '1 000 ₽'
 * usePriceFormatter(1000)
 * ```
 */
export default function (price: number): string {
  /** Форматированная цена */
  return price.toLocaleString("ru-RU", {
    currency: "RUB",
    minimumFractionDigits: 0,
    style: "currency",
  })
}
