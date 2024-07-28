import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsPassword from "~/src/runtime/components/UtilsPassword.vue"

describe.sequential("Компонент UtilsPassword", () => {
  const defaultProps = {
    id: "test-field",
  }

  const stubs = {
    global: {
      stubs: {
        Icon: true,
      },
    },
  }

  test("Рендер", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: defaultProps,
    })

    // Проверяем рендер компонента
    expect(wrapper.element).toBeTruthy()
  })

  test("Стандартные значения `id` и `name`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `id`
    expect(input.attributes("id")).toBe("password")
    // Проверка атрибута `name`
    expect(input.attributes("name")).toBe("password")
  })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: defaultProps,
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка существования `label`
    expect(label.exists()).toBeFalsy()
  })

  test("Выставление атрибута `for` на `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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

  test("Параметр `minlength` по умолчанию `4`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: defaultProps,
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка значения атрибута `minlength`.
    expect(input.attributes("minlength")).toBe("4")
  })

  test("Выставление параметров `maxlength` и `minlength`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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

  test("Выставление параметра `autocomplete`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: {
        autocomplete: "new-password",
        ...defaultProps,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `autocomplete`.
    expect(input.attributes("autocomplete")).toBe("new-password")
  })

  test("Работа кнопки скрытия и показа пароля", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: defaultProps,
    })

    /** Текстовое поле */
    const input = wrapper.find("input")
    /** Переключатель показа пароля */
    const showPasswordButton = wrapper.findComponent({ name: "Icon" })

    // Проверяем, что пароль скрыт
    expect(input.attributes("type")).toBe("password")

    // Нажимаем на кнопку
    await showPasswordButton.trigger("click")

    // Проверяем, что пароль показан
    expect(input.attributes("type")).toBe("text")
  })

  test("Изменение иконки скрытия и показа пароля", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
      props: defaultProps,
    })

    /** Переключатель показа пароля */
    const showPasswordButton = wrapper.findComponent({ name: "Icon" })

    // Проверяем, что пароль скрыт
    expect(showPasswordButton.attributes("name")).toBe("heroicons:eye-slash")

    // Нажимаем на кнопку
    await showPasswordButton.trigger("click")

    // Проверяем, что пароль показан
    expect(showPasswordButton.attributes("name")).toBe("heroicons:eye")
  })

  test("Работа `v-model`", async () => {
    const parentComponent = mount({
      components: {
        UtilsPassword,
      },
      data() {
        return {
          text: "",
        }
      },
      template: `
        <UtilsPassword id="test-field" v-model="text" />
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
        UtilsPassword,
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
          // @ts-expect-error - неправильная автоматическая типизация
          this.formData = new FormData(form)
        },
      },
      template: `
        <form @submit="submit">
          <UtilsPassword id="test-field" />
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
    // @ts-expect-error - неправильная автоматическая типизация
    const formData = Object.fromEntries(parentComponent.vm.formData.entries())

    // Проверяем, что правильно выставлены все данные
    expect(formData).toStrictEqual({
      "test-field": "Тест",
    })
  })

  test("Наличие классов для стилизации", () => {
    /** Компонент */
    const wrapper = mount(UtilsPassword, {
      ...stubs,
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
    /** Классы `Icon` */
    const iconClasses = wrapper.findComponent({ name: "Icon" }).classes()

    // Глобальный класс контейнера
    expect(wrapperClasses).toContain("utils-form-container")
    // Глобальный класс `label`
    expect(labelClasses).toContain("utils-form-label")
    // Глобальный класс поля ввода
    expect(inputClasses).toContain("utils-form-input")

    // Проверка классов контейнера
    expect(wrapperClasses).toContain("utils-password-container")
    // Проверка классов у `label`
    expect(labelClasses).toContain("utils-password-label")
    // Проверка классов у `input`
    expect(inputClasses).toContain("utils-password-input")
    // Проверка классов у `Icon`
    expect(iconClasses).toContain("utils-password-icon")
  })
})
