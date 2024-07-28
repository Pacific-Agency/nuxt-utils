import UtilsDate from "@/runtime/components/UtilsDate.vue"
import { mount } from "@vue/test-utils"
import VueDatePicker from "@vuepic/vue-datepicker"
import { describe, expect, test } from "vitest"

describe("Компонент UtilsDate", () => {
  test("Рендер", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate)

    // Проверяем рендер компонента
    expect(wrapper.element).toBeTruthy()
  })

  test("Стандартные значения `id` и `name`", () => {
    const wrapper = mount(UtilsDate)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка атрибута `id`
    expect(input.attributes("id")).toBe("date")
    // Проверка атрибута `name`
    expect(input.attributes("name")).toBe("date")
  })

  test("Выставление атрибутов `id` и `name` на поле ввода", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
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

  test("Отсутствие `label` в разметке без передачи пропса", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate)

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка существования `label`
    expect(label.exists()).toBeFalsy()
  })

  test("Выставление атрибута `for` на `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
      props: {
        label: "Тестовый label",
      },
    })

    /** Элемент `label` */
    const label = wrapper.find("label")

    // Проверка атрибута `for`
    expect(label.attributes("for")).toBe("date")
  })

  test("Выставление текста `label`", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
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
    const wrapper = mount(UtilsDate)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка отсутствия атрибута `disabled`.
    expect(input.attributes("disabled")).toBeUndefined()
  })

  test("Выставление параметра `disabled`", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
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
    const wrapper = mount(UtilsDate)

    /** Текстовое поле */
    const input = wrapper.find("input")

    // Проверка существования атрибута `required`.
    // При преобразовании в HTML, true заменяется на пустую строку.
    expect(input.attributes("required")).toBe("")
  })

  test("Выставление параметра `required`", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
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
        UtilsDate,
      },
      data() {
        return {
          date: "",
        }
      },
      template: `
        <UtilsDate v-model="date" />
      `,
    })

    // Находим внутренний компонент VueDatePicker внутри UtilsDate
    const datePickerComponent = parentComponent.findComponent(VueDatePicker)

    // Выставляем значение в компоненте VueDatePicker
    await datePickerComponent.vm.$emit("update:model-value", "07.07.2024")

    // Проверяем значение переменной
    expect(parentComponent.vm.date).toBe("07.07.2024")

    // Выставляем значение переменной
    await parentComponent.setData({
      date: "08.08.2024",
    })

    // Проверяем значение инпута
    expect(parentComponent.find("input").element.value).toBe("08.08.2024")
  })

  test("Работа через `formData`", async () => {
    const parentComponent = mount({
      components: {
        UtilsDate,
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
          <UtilsDate />
        </form>
      `,
    })

    // Находим внутренний компонент VueDatePicker внутри UtilsDate
    const datePickerComponent = parentComponent.findComponent(VueDatePicker)

    // Выставляем значение в компоненте VueDatePicker
    await datePickerComponent.vm.$emit("update:model-value", "07.07.2024")

    /** Форма с полями */
    const form = parentComponent.find("form")

    // Триггерим отправку формы
    await form.trigger("submit")

    /** Данные формы */
    const formData = Object.fromEntries(parentComponent.vm.formData.entries())

    // Проверяем, что правильно выставлены все данные
    expect(formData).toStrictEqual({
      date: "07.07.2024",
    })
  })

  test("Наличие классов для стилизации", () => {
    /** Компонент */
    const wrapper = mount(UtilsDate, {
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

    /** Классы `VueDatePicker` */
    const datePicker = wrapper.findComponent(VueDatePicker).classes()

    // Глобальный класс контейнера
    expect(wrapperClasses).toContain("utils-form-container")
    // Глобальный класс `label`
    expect(labelClasses).toContain("utils-form-label")
    // Глобальный класс поля ввода
    expect(inputClasses).toContain("utils-form-input")

    // Проверка классов контейнера
    expect(wrapperClasses).toContain("utils-date-container")
    // Проверка классов у `label`
    expect(labelClasses).toContain("utils-date-label")
    // Проверка классов у `input`
    expect(inputClasses).toContain("utils-date-input")
    // Проверка классов у `VueDatePicker`
    expect(datePicker).toContain("utils-date-picker")
  })
})
