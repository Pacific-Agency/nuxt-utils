import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsMapWidget from "@/runtime/components/UtilsMapWidget.vue"

describe.concurrent("Компонент UtilsMapWidget", () => {
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
    // Получение src карты
    const widgetSrc = wrapper.get("iframe").attributes("src")

    // Ожидается правильный src карты
    expect(widgetSrc).toBe(`https://yandex.ru/map-widget/v1/-/${widgetId}`)
  })

  test("Присваивание классов с компонента на `iframe`", () => {
    // Получение списка классов `iframe`
    const widgetClassList = wrapper.get("iframe").attributes("class")

    // Ожидается, что список классов содержит переданные на компонент
    expect(widgetClassList).toContain(classList)
  })

  test("Добавляется параметр `lang` в ссылку при передаче локализации", async () => {
    await wrapper.setProps({
      locale: "en",
    })

    // Получение src карты
    const widgetSrc = wrapper.get("iframe").attributes("src")

    // Ожидается правильный src карты
    expect(widgetSrc).toBe(
      `https://yandex.ru/map-widget/v1/-/${widgetId}?lang=en`
    )
  })
})
