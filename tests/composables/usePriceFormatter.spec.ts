import usePriceFormatter from "@/runtime/composables/usePriceFormatter"
import { describe, expect, test } from "vitest"

describe("Функция usePriceFormatter", () => {
  test("Возвращает правильный формат цены", () => {
    /** Отформатированная цена */
    const formattedPrice = usePriceFormatter(1234567)

    expect(formattedPrice).toBe("1 234 567 ₽")
  })

  test("Возвращает правильный формат цены с дробной частью", () => {
    /** Отформатированная цена */
    const formattedPrice = usePriceFormatter(1234567.89)

    expect(formattedPrice).toBe("1 234 567,89 ₽")
  })
})
