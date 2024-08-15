import { describe, expect, test } from "vitest"

import useHighlightedText from "~/src/runtime/composables/useHighlightedText"

describe("Функция useHighlightedText", () => {
  test("Возвращает текст с выделением", () => {
    /** Текст */
    const text = "The quick brown fox jumps over the lazy dog"
    /** Запрос */
    const query = "fox"

    /** Ожидаемый результат */
    const expected = "The quick brown <mark>fox</mark> jumps over the lazy dog"

    // Сравниваем результат с ожидаемым результатом
    expect(useHighlightedText(text, query)).toStrictEqual(expected)
  })

  test("Возвращает текст с несколькими выделениями", () => {
    /** Текст */
    const text =
      "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog again."
    /** Запрос */
    const query = "fox"

    /** Ожидаемый результат */
    const expected =
      "The quick brown <mark>fox</mark> jumps over the lazy dog. The quick brown <mark>fox</mark> jumps over the lazy dog again."

    // Сравниваем результат с ожидаемым результатом
    expect(useHighlightedText(text, query)).toStrictEqual(expected)
  })

  test("Возвращает текст с выделением вне зависимости от регистра", () => {
    /** Текст */
    const text = "The quick brown fox jumps over the lazy dog"
    /** Запрос */
    const query = "FOX"

    /** Ожидаемый результат */
    const expected = "The quick brown <mark>fox</mark> jumps over the lazy dog"

    // Сравниваем результат с ожидаемым результатом
    expect(useHighlightedText(text, query)).toStrictEqual(expected)
  })

  test("Возвращает текст без выделения, если запрос не найден", () => {
    /** Текст */
    const text = "The quick brown fox jumps over the lazy dog"
    /** Запрос */
    const query = "cat"

    /** Ожидаемый результат */
    const expected = "The quick brown fox jumps over the lazy dog"

    // Сравниваем результат с ожидаемым результатом
    expect(useHighlightedText(text, query)).toStrictEqual(expected)
  })

  test("Возвращает текст без выделения, если запрос пустой", () => {
    /** Текст */
    const text = "The quick brown fox jumps over the lazy dog"
    /** Запрос */
    const query = ""

    /** Ожидаемый результат */
    const expected = "The quick brown fox jumps over the lazy dog"

    // Сравниваем результат с ожидаемым результатом
    expect(useHighlightedText(text, query)).toStrictEqual(expected)
  })
})
