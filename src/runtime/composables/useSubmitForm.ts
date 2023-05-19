import type { ComputedRef, Ref } from "#imports"
import { ref, unref, useFetch, useRuntimeConfig } from "#imports"

/** Параметры функции */
interface Options {
  /** Объект, который будет передан в `body` запроса */
  body: Record<string, string>
  /** Является ли тип контента `multipart/form-data` */
  isFormData: boolean
  /** Функция, вызываемая при запросе */
  onRequest: () => void
  /** Функция, вызываемая при успешно полученном ответе спустя три секунды */
  onResponse: () => void
}

/**
 * Функция для отправки данных формы
 *
 * @param url - Эндпоинт для отправки данных
 * @param options - Объект с параметрами для функции
 * @returns Объект с методами для работы с формой
 * - `isLoading` - Находится ли форма в состоянии загрузки
 * - `isSent` - Отправлена ли форма
 * - `sendRequest` - функция для отправки формы
 * @see https://pacific-agency.github.io/nuxt-utils/composables/use-submit-form.html
 * @example
 * ```ts
 * const { sendRequest, isSent, isLoading } = useSubmitForm('faq')
 * ```
 */
export default function useSubmitForm(
  url: ComputedRef<string> | string,
  options?: Partial<Options>
): {
  isLoading: Ref<boolean>
  isSent: Ref<boolean>
  sendRequest(event: Event): Promise<void>
} {
  /** Находится ли форма в состоянии загрузки */
  const isLoading = ref(false)
  /** Отправлена ли форма */
  const isSent = ref(false)

  /**
   * Функция для отправки данных формы
   *
   * @param event - событие отправки формы
   */
  async function sendRequest(event: Event) {
    /** Форма */
    const form = event.target as HTMLFormElement

    /** Объект со всеми данными формы */
    const formData = new FormData(form)

    // Добавление дополнительно переданных полей в данные формы
    if (options?.body) {
      for (const [key, value] of Object.entries(options.body)) {
        formData.append(key, value)
      }
    }

    // Отправка запроса к API
    await useFetch(`/mail/${unref(url)}/`, {
      baseURL: useRuntimeConfig().public.apiBase,
      body: options?.isFormData
        ? formData
        : Object.fromEntries(formData.entries()),
      method: "POST",
      onRequest() {
        /** Меняем состояние загрузки */
        isLoading.value = true

        options?.onRequest?.()
      },
      onRequestError({ error }) {
        // Если есть ошибка, то выводим об этом `alert`
        alert(`Ошибка: ${error.message}`)

        /** Меняем состояние загрузки */
        isLoading.value = false
      },
      onResponse({ response }) {
        // Если запрос выполнен успешно
        if (response.ok) {
          /** Меняем состояние загрузки */
          isLoading.value = false

          /** Меняем состояние отправки */
          isSent.value = true

          // Выставляем таймер на 3 секунды
          setTimeout(() => {
            // Очищаем форму
            form.reset()

            options?.onResponse?.()

            // Сбрасываем состояние отправки
            isSent.value = false
          }, 3000)
        }
      },
      onResponseError({ response }) {
        // Если есть ошибка, то выводим об этом `alert`
        if (!response.ok) {
          alert(response.statusText)
        }

        /** Меняем состояние загрузки */
        isLoading.value = false
      },
    })
  }
  return {
    isLoading,
    isSent,
    sendRequest,
  }
}
