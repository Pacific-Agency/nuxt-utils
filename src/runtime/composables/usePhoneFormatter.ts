/**
 * Функция, возвращающая форматированный номер телефона.
 *
 * Телефон необходимо передавать в формате `+79998887766`. Если передан неправильный формат номера телефона, то функция вернет `null`.
 *
 * @param phone - номер телефона
 * @returns форматированный номер телефона или `null`
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-phone-formatter.html
 * @example
 * ```ts
 * // Вернет '+7 999 888-77-66'
 * usePhoneFormatter('+79998887766')
 * ```
 */
export default function (phone: string): null | string {
  /** Номер, очищенный от символов, не являющихся цифрами */
  const cleaned = ("" + phone).replace(/\D/g, "")

  /**
   * Номер, разбитый на части
   *
   * Если номер не соответствует формату, вернется `null`
   */
  const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    /** Код страны */
    const countryCode = match[1] ? "+7" : ""
    return `${countryCode}\u00A0${match[2]}\u00A0${match[3]}-${match[4]}-${match[5]}`
  }

  return null
}
