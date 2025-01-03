import type { UseFetchOptions } from "#app"
import type { MaybeRef, Ref } from "#imports"

// @ts-expect-error - функция есть в итоговом проекте
import { ref, unref, useFetch, useFetchAuth } from "#imports"
import { defu } from "defu"

/** Параметры useFetch */
type FetchParams = Parameters<typeof useFetch>

/** Параметры отправки формы */
interface SubmitFormOptions extends UseFetchOptions<void> {
  /** Использовать ли авторизацию */
  auth: boolean
  /** Является ли тип контента `multipart/form-data` */
  isFormData: boolean
  /** Функция, вызываемая при запросе */
  onSubmitRequest: () => void
  /** Функция, вызываемая при успешно полученном ответе спустя три секунды */
  onSubmitResponse: () => void
  /** Объект, который будет передан в `body` запроса */
  submitFormBody: MaybeRef<Record<string, string>>
}

/**
 * Функция для отправки данных формы
 *
 * @param url - Эндпоинт для отправки данных.
 * @param options - Объект с параметрами для функции.
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
  url: FetchParams[0],
  options?: MaybeRef<Partial<SubmitFormOptions>>,
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

    /** Нереактивные параметры функции */
    const optionsRaw = unref(options)
    /** Нереактивное `body` запроса */
    const submitFormBodyRaw = unref(optionsRaw?.submitFormBody)

    // Добавление дополнительно переданных полей в данные формы
    if (submitFormBodyRaw) {
      for (const [key, value] of Object.entries(submitFormBodyRaw)) {
        formData.append(key, value)
      }
    }

    /** Параметры по умолчанию */
    const defaults: UseFetchOptions<void> = {
      body: optionsRaw?.isFormData
        ? formData
        : Object.fromEntries(formData.entries()),
      method: "POST",
      onRequest() {
        // Меняем состояние загрузки
        isLoading.value = true

        optionsRaw?.onSubmitRequest?.()
      },
      onRequestError({ error }) {
        // Если есть ошибка, то выводим об этом `alert`
        alert(`Ошибка: ${error.message}`)

        // Меняем состояние загрузки
        isLoading.value = false
      },
      onResponse({ response }) {
        // Если запрос выполнен успешно
        if (response.ok) {
          // Меняем состояние загрузки
          isLoading.value = false

          // Меняем состояние отправки
          isSent.value = true

          // Выставляем таймер на 3 секунды
          setTimeout(() => {
            // Очищаем форму
            form.reset()

            optionsRaw?.onSubmitResponse?.()

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

        // Меняем состояние загрузки
        isLoading.value = false
      },
    }

    /**
     * Параметры для функции.
     *
     * Для работы их как дефолтных используется `defu`.
     */
    const params = defu(optionsRaw, defaults)

    // Отправка запроса к API
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    params.auth // Проверяем параметр авторизации
      ? await useFetchAuth(url, params) // Если параметр `true`, то делаем запрос с помощью useFetchAuth
      : await useFetch(url, params)
  }
  return {
    isLoading,
    isSent,
    sendRequest,
  }
}
