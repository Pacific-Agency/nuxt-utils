import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

import UtilsPhone from "~/src/runtime/components/UtilsPhone.vue"

describe("Компонент UtilsPhone", () => {
  test("Рендер", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Проверяем рендер компонента
    expect(wrapper.element).toBeTruthy()
  })

  test("Стандартные значения `id` и `name`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `id`
    expect(input.attributes("id")).toBe("phone")
    // Проверка атрибута `name`
    expect(input.attributes("name")).toBe("phone")
  })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        id: "test-field",
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `id`
    expect(input.attributes("id")).toBe("test-field")
    // Проверка атрибута `name`
    expect(input.attributes("name")).toBe("test-field")
  })

  test("Присутствие необходимых атрибутов у `input`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `autocomplete`
    expect(input.attributes("autocomplete")).toBe("tel")
    // Проверка атрибута `maxlength`
    expect(input.attributes("maxlength")).toBe("16")
    // Проверка атрибута `pattern`
    expect(input.attributes("pattern")).toBe(
      String.raw`\+\d \d{3} \d{3}-\d{2}-\d{2}`,
    )
    // Проверка атрибута `placeholder`
    expect(input.attributes("placeholder")).toBe("+7 999 888-77-66")
  })

  test("Отсутствие `label` в разметке без передачи пропса", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка существования `label`
    expect(label.exists()).toBeFalsy()
  })

  test("Выставление атрибута `for` на `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        label: "Тестовый label",
      },
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка атрибута `for`
    expect(label.attributes("for")).toBe("phone")
  })

  test("Выставление текста `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        label: "Тестовый label",
      },
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка атрибута `for`
    expect(label.element.textContent).toBe("Тестовый label")
  })

  test("Параметр `disabled` по умолчанию false", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `disabled`.
    expect(input.attributes("disabled")).toBeUndefined()
  })

  test("Выставление параметра `disabled`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        disabled: true,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `disabled`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("disabled")).toBe("")
  })

  test("Параметр `required` по умолчанию `true`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `required`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("required")).toBe("")
  })

  test("Выставление параметра `required`", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        required: false,
      },
    })

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `required`.
    expect(input.attributes("required")).toBeUndefined()
  })

  test("Работа v-model", async () => {
    const parentComponent = mount({
      components: {
        UtilsPhone,
      },
      data() {
        return {
          phone: "",
        }
      },
      template: `
        <UtilsPhone v-model="phone" />
      `,
    })

    // Выставляем значение инпута
    await parentComponent.find("input").setValue("123")

    // Проверяем значение переменной
    expect(parentComponent.vm.phone).toBe("+7 123")

    // Выставляем значение переменной
    await parentComponent.setData({
      phone: "+7 321",
    })

    // Проверяем значение инпута
    expect(parentComponent.find("input").element.value).toBe("+7 321")
  })

  test("Работа через `formData`", async () => {
    const parentComponent = mount({
      components: {
        UtilsPhone,
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
          <UtilsPhone />
        </form>
      `,
    })

    /** Текстовое поле */
    const input = parentComponent.find("input")

    /** Форма с полями */
    const form = parentComponent.find("form")

    // Выставляем значения поля
    await input.setValue("+7 999")

    // Триггерим отправку формы
    await form.trigger("submit")

    /** Данные формы */
    // @ts-expect-error - неправильная автоматическая типизация
    const formData = Object.fromEntries(parentComponent.vm.formData.entries())

    // Проверяем, что правильно выставлены все данные
    expect(formData).toStrictEqual({
      phone: "+7 999",
    })
  })

  test("Правильный формат номера", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута
    await wrapper.find("input").setValue("9998887766")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+7 999 888-77-66")
  })

  test("Ввод с +", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута
    await wrapper.find("input").setValue("+")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+")
  })

  test("Ввод с 7", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута
    await wrapper.find("input").setValue("7")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+7")
  })

  test("Ввод с других цифр", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута
    await wrapper.find("input").setValue("123")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+7 123")
  })

  test("Ограничение по длине", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута (цифры 00 лишние)
    await wrapper.find("input").setValue("999888776600")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+7 999 888-77-66")
  })

  test("Невозможность ввода букв", async () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone)

    // Выставляем значение инпута (тест должно быть удалено)
    await wrapper.find("input").setValue("999тест8887766")

    // Проверяем значение инпута
    expect(wrapper.find("input").element.value).toBe("+7 999 888-77-66")
  })

  test("Наличие классов для стилизации", () => {
    /** Компонент */
    const wrapper = mount(UtilsPhone, {
      props: {
        label: "Тестовый label",
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
    expect(wrapperClasses).toContain("utils-phone-container")
    // Проверка классов у `label`
    expect(labelClasses).toContain("utils-phone-label")
    // Проверка классов у `input`
    expect(inputClasses).toContain("utils-phone-input")
  })
})
