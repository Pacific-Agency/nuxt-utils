import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsMapWidget from "~/src/runtime/components/UtilsMapWidget.vue"

describe.sequential("Компонент UtilsMapWidget", () => {
  /** `ID` виджета */
  const widgetId = "widget-id"
  /** Список классов */
  const classList = "class-1 class-2"

  const wrapper = mount(UtilsMapWidget, {
    attrs: {
      class: classList,
    },
    props: {
      widgetId: widgetId,
    },
  })

  test("Рендер", () => {
    // Ожидается, что элемент существует
    expect(wrapper.element).toBeTruthy()
  })

  test("Генерируется правильная ссылка на виджет", () => {
    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    // Ожидается правильный src карты
    expect(widgetURL.href).toBe(
      `https://yandex.ru/map-widget/v1/-/${widgetId}?z=16`,
    )
  })

  test("Присваивание классов с компонента на `iframe`", () => {
    // Получение списка классов `iframe`
    const widgetClassList = wrapper.get("iframe").attributes("class")

    // Ожидается, что список классов содержит переданные на компонент
    expect(widgetClassList).toContain(classList)
  })

  test("Выставляется параметр z равный 16", async () => {
    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    /** Параметры URL */
    const searchParams = widgetURL.searchParams

    // Ожидается правильный параметр z
    expect(searchParams.get("z")).toBe("16")
  })

  test("Добавляется параметр `lang` в ссылку при передаче локализации", async () => {
    await wrapper.setProps({
      locale: "en",
    })

    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    /** Параметры URL */
    const searchParams = widgetURL.searchParams

    // Ожидается правильный параметр lang
    expect(searchParams.get("lang")).toBe("en")
  })

  test("Изменение параметра `lang`", async () => {
    await wrapper.setProps({
      locale: "ru",
    })

    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    /** Параметры URL */
    const searchParams = widgetURL.searchParams

    // Ожидается правильный параметр lang
    expect(searchParams.get("lang")).toBe("ru")
  })

  test("Удаление параметра `lang`", async () => {
    await wrapper.setProps({
      locale: undefined,
    })

    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    /** Параметры URL */
    const searchParams = widgetURL.searchParams

    // Ожидается правильный параметр lang
    expect(searchParams.get("lang")).toBeNull()
  })

  test("Параметр z правильно взаимодействует с lang", async () => {
    await wrapper.setProps({
      locale: "en",
    })

    /** Получение src карты */
    const widgetURL = new URL(wrapper.get("iframe").attributes("src") ?? "")

    /** Параметры URL */
    const searchParams = widgetURL.searchParams

    // Ожидается правильные параметры
    expect(searchParams.toString()).toMatchInlineSnapshot(`"z=16&lang=en"`)
  })
})
