import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsTextArea from "@/runtime/components/UtilsTextArea.vue"

describe("Компонент UtilsTextArea", () => {
  const defaultProps = {
    id: "test-field",
  }

  test("Рендер", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: defaultProps,
    })

    // Проверяем рендер компонента
    expect(wrapper.element).toBeTruthy()
  })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка атрибута `id`
    expect(textarea.attributes("id")).toBe(defaultProps.id)
    // Проверка атрибута `name`
    expect(textarea.attributes("name")).toBe(defaultProps.id)
  })

  test("Отсутствие `label` в разметке без передачи пропса", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: defaultProps,
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка существования `label`
    expect(label.exists()).toBeFalsy()
  })

  test("Выставление атрибута `for` на `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        label: "Тестовый label",
        ...defaultProps,
      },
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка атрибута `for`
    expect(label.attributes("for")).toBe(defaultProps.id)
  })

  test("Выставление текста `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        label: "Тестовый label",
        ...defaultProps,
      },
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка атрибута `for`
    expect(label.element.textContent).toBe("Тестовый label")
  })

  test("Выставление текста `placeholder`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        placeholder: "Тестовый placeholder",
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка атрибута `placeholder`
    expect(textarea.attributes("placeholder")).toBe("Тестовый placeholder")
  })

  test("Параметр `required` по умолчанию `true`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка существования атрибута `required`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(textarea.attributes("required")).toBe("")
  })

  test("Выставление параметра `required`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        required: false,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка отсутствия атрибута `required`.
    expect(textarea.attributes("required")).toBeUndefined()
  })

  test("Параметр `disabled` по умолчанию false", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("textarea")

    // Проверка отсутствия атрибута `disabled`.
    expect(input.attributes("disabled")).toBeUndefined()
  })

  test("Выставление параметра `disabled`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        disabled: true,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("textarea")

    // Проверка существования атрибута `disabled`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("disabled")).toBe("")
  })

  test("Параметр `rows` по умолчанию `3`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка значения атрибута `rows`.
    expect(textarea.attributes("rows")).toBe("3")
  })

  test("Выставление параметра `rows`", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        rows: 5,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const textarea = wrapper.find("textarea")

    // Проверка значения атрибута `rows`.
    expect(textarea.attributes("rows")).toBe("5")
  })

  test("Работа `v-model`", async () => {
    const parentComponent = mount({
      components: {
        UtilsTextArea,
      },
      data() {
        return {
          text: "",
        }
      },
      template: `
        <UtilsTextArea id="test-field" v-model="text" />
      `,
    })

    /** Текстовое поле */
    const textarea = parentComponent.find("textarea")

    // Выставляем значение инпута
    await textarea.setValue("Текст")

    // Проверяем значение переменной
    expect(parentComponent.vm.text).toBe("Текст")

    // Выставляем значение переменной
    await parentComponent.setData({
      text: "Другой текст",
    })

    // Проверяем значение инпута
    expect(textarea.element.value).toBe("Другой текст")
  })

  test("Работа через `formData`", async () => {
    const parentComponent = mount({
      components: {
        UtilsTextArea,
      },
      data() {
        return {
          formData: new FormData(),
        }
      },
      methods: {
        submit(event: Event) {
          /** Форма */
          const form = event.target as HTMLFormElement

          /** Объект со всеми данными формы */
          this.formData = new FormData(form)
        },
      },
      template: `
        <form @submit="submit">
          <UtilsTextArea id="test-field" />
        </form>
      `,
    })

    /** Текстовое поле */
    const textarea = parentComponent.find("textarea")

    /** Форма с полями */
    const form = parentComponent.find("form")

    // Выставляем значения поля
    await textarea.setValue("Тест")

    // Триггерим отправку формы
    await form.trigger("submit")

    /** Данные формы */
    const formData = Object.fromEntries(parentComponent.vm.formData.entries())

    // Проверяем, что правильно выставлены все данные
    expect(formData).toStrictEqual({
      "test-field": "Тест",
    })
  })

  test("Наличие классов для стилизации", () => {
    /** Компонент */
    const wrapper = mount(UtilsTextArea, {
      props: {
        label: "Тестовый label",
        ...defaultProps,
      },
    })

    /** Классы `wrapper` */
    const wrapperClasses = wrapper.classes()
    /** Классы `label` */
    const labelClasses = wrapper.find("label").classes()
    /** Классы `textarea` */
    const inputClasses = wrapper.find("textarea").classes()

    // Глобальный класс контейнера
    expect(wrapperClasses).toContain("utils-form-container")
    // Глобальный класс `label`
    expect(labelClasses).toContain("utils-form-label")
    // Глобальный класс поля ввода
    expect(inputClasses).toContain("utils-form-input")

    // Проверка классов контейнера
    expect(wrapperClasses).toContain("utils-textarea-container")
    // Проверка классов у `label`
    expect(labelClasses).toContain("utils-textarea-label")
    // Проверка классов у `textarea`
    expect(inputClasses).toContain("utils-textarea-textarea")
  })
})
