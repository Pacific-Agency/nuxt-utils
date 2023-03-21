import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import MapWidget from "@/runtime/components/MapWidget.vue"

describe.concurrent("Компонент MapWidget", () => {
  /** `ID` виджета */
  const widgetId = "widget-id"
  /** Список классов */
  const classList = "class-1 class-2"

  const wrapper = mount(MapWidget, {
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
})
