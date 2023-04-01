import { Ref, ref, useFetch, useRuntimeConfig } from "#imports"

/**
 * Функция для отправки данных формы
 *
 * @param url - Эндпоинт для отправки данных
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
export default function useSubmitForm(url: string): {
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

    // Отправка запроса к API
    await useFetch(`/mail/${url}/`, {
      baseURL: useRuntimeConfig().public.apiBase,
      body: Object.fromEntries(formData.entries()),
      method: "POST",
      onRequest() {
        /** Меняем состояние загрузки */
        isLoading.value = true
      },
      onRequestError({ error }) {
        // Если есть ошибка, то выводим об этом `alert`
        alert(`Ошибка: ${error}`)

        /** Меняем состояние загрузки */
        isLoading.value = false
      },
      onResponse() {
        /** Меняем состояние загрузки */
        isLoading.value = false

        /** Меняем состояние отправки */
        isSent.value = true

        // Выставляем таймер на 3 секунды
        setTimeout(() => {
          // Очищаем форму
          form.reset()

          // Сбрасываем состояние отправки
          isSent.value = false
        }, 3000)
      },
      onResponseError({ error }) {
        // Если есть ошибка, то выводим об этом `alert`
        alert(`Ошибка: ${error}`)

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
