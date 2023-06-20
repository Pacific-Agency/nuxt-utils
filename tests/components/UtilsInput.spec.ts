import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsInput from "@/runtime/components/UtilsInput.vue"

describe.concurrent("Компонент UtilsInput", () => {
  const defaultProps = {
    id: "test-field",
  }

  test("Рендер", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: defaultProps,
    })

    // Проверяем рендер компонента
    expect(wrapper.element).toBeTruthy()
  })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `id`
    expect(input.attributes("id")).toBe(defaultProps.id)
    // Проверка атрибута `name`
    expect(input.attributes("name")).toBe(defaultProps.id)
  })

  test("Отсутствие `label` в разметке без передачи пропса", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: defaultProps,
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка существования `label`
    expect(label.exists()).toBeFalsy()
  })

  test("Выставление атрибута `for` на `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
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
    const wrapper = mount(UtilsInput, {
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
    const wrapper = mount(UtilsInput, {
      props: {
        placeholder: "Тестовый placeholder",
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `placeholder`
    expect(input.attributes("placeholder")).toBe("Тестовый placeholder")
  })

  test("Параметр `disabled` по умолчанию false", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `disabled`.
    expect(input.attributes("disabled")).toBeUndefined()
  })

  test("Выставление параметра `disabled`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        disabled: true,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `disabled`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("disabled")).toBe("")
  })

  test("Выставление параметра `pattern`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        pattern: "\\+\\d \\d{3} \\d{3}-\\d{2}-\\d{2}",
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `pattern`
    expect(input.attributes("pattern")).toBe(
      "\\+\\d \\d{3} \\d{3}-\\d{2}-\\d{2}"
    )
  })

  test("Выставление параметров `maxlength` и `minlength`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        maxlength: 12,
        minlength: 4,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `maxlength`.
    expect(input.attributes("maxlength")).toBe("12")

    // Проверка существования атрибута `minlength`.
    expect(input.attributes("minlength")).toBe("4")
  })

  test("Параметр `required` по умолчанию `true`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `required`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("required")).toBe("")
  })

  test("Выставление параметра `required`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        required: false,
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `required`.
    expect(input.attributes("required")).toBeUndefined()
  })

  test("Параметр `type` по умолчанию `text`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: defaultProps,
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка значения атрибута `type`.
    expect(input.attributes("type")).toBe("text")
  })

  test("Выставление параметра `type`", () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        type: "password",
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка значения атрибута `type`.
    expect(input.attributes("type")).toBe("password")
  })

  test("Работа `v-maska`", async () => {
    /** Компонент */
    const wrapper = mount(UtilsInput, {
      props: {
        dataMaska: "###-###",
        ...defaultProps,
      },
    })
    // Выставляем значение инпута
    await wrapper.find("input").setValue("1234asdas56789545")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("123-456")
  })

  test("Работа `v-model`", async () => {
    const parentComponent = mount({
      components: {
        UtilsInput,
      },
      data() {
        return {
          text: "",
        }
      },
      template: `
        <UtilsInput id="test-field" v-model="text" />
      `,
    })

    /** Текстовое поле */
    const input = parentComponent.find("input")

    // Выставляем значение инпута
    await input.setValue("Текст")

    // Проверяем значение переменной
    expect(parentComponent.vm.text).toBe("Текст")

    // Выставляем значение переменной
    await parentComponent.setData({
      text: "Другой текст",
    })

    // Проверяем значение инпута
    expect(input.element.value).toBe("Другой текст")
  })

  test("Работа через `formData`", async () => {
    const parentComponent = mount({
      components: {
        UtilsInput,
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
          <UtilsInput id="test-field" />
        </form>
      `,
    })

    /** Текстовое поле */
    const input = parentComponent.find("input")

    /** Форма с полями */
    const form = parentComponent.find("form")

    // Выставляем значения поля
    await input.setValue("Тест")

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
    const wrapper = mount(UtilsInput, {
      props: {
        label: "Тестовый label",
        ...defaultProps,
      },
    })

    /** Классы `wrapper` */
    const wrapperClasses = wrapper.classes()
    /** Классы `label` */
    const labelClasses = wrapper.find("label").classes()
    /** Классы `input` */
    const inputClasses = wrapper.find("input").classes()

    // Глобальный класс контейнера
    expect(wrapperClasses).toContain("utils-form-container")
    // Глобальный класс `label`
    expect(labelClasses).toContain("utils-form-label")
    // Глобальный класс поля ввода
    expect(inputClasses).toContain("utils-form-input")

    // Проверка классов контейнера
    expect(wrapperClasses).toContain("utils-input-container")
    // Проверка классов у `label`
    expect(labelClasses).toContain("utils-input-label")
    // Проверка классов у `input`
    expect(inputClasses).toContain("utils-input-input")
  })
})
