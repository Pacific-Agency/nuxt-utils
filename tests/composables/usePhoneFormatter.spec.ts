import { describe, expect, test } from "vitest"

import usePhoneFormatter from "~/src/runtime/composables/usePhoneFormatter"

describe("Функция usePhoneFormatter", () => {
  test("Возвращает правильный формат номера", () => {
    /** Отформатированный номер */
    const formattedNumber = usePhoneFormatter("+79998887766")

    expect(formattedNumber).toBe("+7 999 888-77-66")
  })

  test("Удаляет все буквы и возвращает правильный формат номера", () => {
    /** Отформатированный номер */
    const formattedNumber = usePhoneFormatter("+7f99а9f8п887п766")

    expect(formattedNumber).toBe("+7 999 888-77-66")
  })

  test("При вводе некорректного номера возвращает `undefined`", () => {
    /** Отформатированный номер */
    const formattedNumber = usePhoneFormatter("1234")

    expect(formattedNumber).toBeUndefined()
  })
})
