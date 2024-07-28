import { describe, expect, test } from "vitest"

import usePriceFormatter from "~/src/runtime/composables/usePriceFormatter"

describe("Функция usePriceFormatter", () => {
  test("Возвращает правильный формат цены", () => {
    /** Отформатированная цена */
    const formattedPrice = usePriceFormatter(1_234_567)

    expect(formattedPrice).toBe("1 234 567 ₽")
  })

  test("Возвращает правильный формат цены с дробной частью", () => {
    /** Отформатированная цена */
    const formattedPrice = usePriceFormatter(1_234_567.89)

    expect(formattedPrice).toBe("1 234 567,89 ₽")
  })
})
