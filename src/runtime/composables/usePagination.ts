import type { UseFetchOptions } from "#app"
import type { Ref } from "#imports"
import { ref, toReactive, useFetch, useFetchAuth, watch } from "#imports"
import { defu } from "defu"

/** Параметры useFetch */
type FetchParams = Parameters<typeof useFetch>

/** Ответ от API с пагинацией */
interface Pagination<TResponse> {
  /** Количество результатов */
  count: number
  /** Следующая страница */
  next: string | null
  /** Предыдущая страница */
  previous: string | null
  /** Результаты запроса */
  results: TResponse
}

/** Параметры пагинации */
interface PaginationOptions<TResponse>
  extends UseFetchOptions<Pagination<TResponse[]>> {
  /** Использовать ли авторизацию */
  auth?: boolean
}

/**
 * Данная функция возвращает объект с методами для работы с пагинацией.
 *
 * @param url - `URL` для запроса
 * @param options - параметры запроса
 * @returns Объект с методами для работы с пагинацией
 * - `increasePage` - функция для увеличения номера страницы
 * - `isPageLast` - возвращает `true` если текущая страница последняя
 * - `results` - массив с результатами запроса
 * - `refresh` - функция для обновления запроса
 */
export default async function <TResponse>(
  url: FetchParams[0],
  options: PaginationOptions<TResponse> = {}
) {
  /** Выбранная страница пагинации */
  const selectedPage = ref<number>(1)
  /** Является ли страница последней */
  const isPageLast = ref<boolean>(false)

  /** Список результатов */
  const results: Ref<TResponse[]> = ref([])

  /**
   * Данная функция увеличивает номер страницы на `1`
   */
  function increasePage() {
    selectedPage.value++
  }

  /**
   * Данная функция проверяет, является ли страница последней
   *
   * @param nextPage - Следующая страница
   */
  function checkLastPage(nextPage?: string | null) {
    isPageLast.value = !nextPage
  }

  /**
   * Данная функция добавляет результаты в общий список
   *
   * @param resultsArray - Список услуг
   */
  function addResults(resultsArray?: TResponse[]) {
    if (resultsArray) {
      results.value.push(...resultsArray)
    }
  }

  /**
   * Данная функция заменяет услуги в списке
   *
   * @param resultsArray - Список услуг
   */
  function replaceResults(resultsArray?: TResponse[]) {
    results.value = resultsArray ?? []
  }

  /** Дефолтные параметры функции */
  const defaults: PaginationOptions<TResponse> = {
    query: {
      page: selectedPage,
    },
  }

  /**
   * Параметры для функции.
   *
   * Для работы их как дефолтных используется `defu`.
   */
  const params = defu(options, defaults)

  /** Результат запроса */
  const { data, refresh } = params.auth // Проверяем параметр авторизации
    ? await useFetchAuth<Pagination<TResponse[]>>(url, params) // Если параметр `true`, то делаем запрос с помощью useFetchAuth
    : await useFetch<Pagination<TResponse[]>>(url, params) // Иначе делаем запрос с обычным useFetch

  // Добавляем результаты в список
  addResults(data.value?.results)
  // Проверяем, является ли страница последней
  checkLastPage(data.value?.next)

  /**
   * Если меняется номер страницы,
   * то результаты добавляются в список.
   */
  watch(selectedPage, () => {
    if (selectedPage.value !== 1) {
      refresh()
        .then(() => {
          addResults(data.value?.results)
          checkLastPage(data.value?.next)
        })
        .catch((error) => {
          alert(error)
        })
    }
  })

  /**
   * Если меняются параметры запроса,
   * то выбранная страница выставляются первой,
   * а результаты заменяются в списке.
   */
  watch(toReactive(options), () => {
    selectedPage.value = 1
    refresh()
      .then(() => {
        replaceResults(data.value?.results)
        checkLastPage(data.value?.next)
      })
      .catch((error) => {
        alert(error)
      })
  })

  return { increasePage, isPageLast, refresh, results }
}
