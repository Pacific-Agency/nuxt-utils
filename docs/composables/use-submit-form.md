# useSubmitForm

Функция, которая упрощает отправку данных с формы.

Функция принимает 2 параметра:

- `url` - название эндпоинта, добавляя перед названием `/api/mail/`. Параметр может быть реактивным либо обычной строкой.
- `options` - объект с параметрами, которые будут переданы в функцию. Является необязательным, поэтому если не нужно передавать никаких параметров, он просто не указывается.

## Возвращаемые методы

- `isLoading` - Находится ли форма в состоянии загрузки (по умолчанию false).
- `isSent` - Отправлена ли форма (по умолчанию false).
- `sendRequest` - функция для отправки формы.

::: info

- На запрос, состояние загрузки (переменная `isLoading`) устанавливается в `true`.
- Если на попытку запроса, либо при попытке получения ответа произошла ошибка, то состояние загрузки меняется в `false` и пользователю выводится сообщение об ошибке через оповещение.
- Если пришёл ответ, то состояние загрузки меняется в `false`, состояние отправки (переменная `isSent`) на три секунды устанавливается в `true`, после чего возвращается в обратно в `false`. Все заполненные данные в форме очищаются спустя три секунды.
  :::

::: warning

- Функция `sendRequest` обязательно должна передаваться как обработчик события `submit` у формы, которое вызывается у формы, когда произошёл клик по `button` либо `input`, тип которого равняется `submit`.
- У всех `input` внутри формы должен обязательно присутствовать аттрибут `name`. Название аттрибута будет использовано в качестве ключа передаваемого объекта.
  :::

## Параметры

- `url` - Название эндпоинта для отправки данных
- `options` - Объект с параметрами для функции

### Дополнительные параметры `options`:

- `body` - Объект, который будет передан в форму.
- `isFormData` - Является ли тип контента `multipart/form-data` (по умолчанию форма отправляется в формате `JSON`).
- `onRequest` - Функция, вызываемая при запросе.
- `onResponse` - Функция, вызываемая при успешно полученном ответе спустя три секунды.

## Использование

### С обычной строкой

```ts
const { sendRequest, isLoading, isSent } = useSubmitForm("faq")
```

### С реактивным параметром `url`

```ts
const reactiveUrl = computed(() => (condition ? "faq" : "appointment"))

const { sendRequest, isLoading, isSent } = useSubmitForm(reactiveUrl)
```

### С дополнительными параметрами

```ts
const { sendRequest, isLoading, isSent } = useSubmitForm("faq", {
  body: {
    requestUrl: location.href,
    isFormData: true,
    onResponse() {
      // do something on response
    },
    onRequest() {
      // do something on request
    },
  },
})
```

### Пример формы

```html
<form @submit.prevent="sendRequest">
  <input type="text" name="name" />
  <input type="text" name="phone" />
  <button type="submit">
    <span v-if="isLoading">Выполняется отправка формы</span>
    <span v-else-if="isSent">Форма успешно отправлена</span>
    <span v-else>Отправить форму</span>
  </button>
</form>
```
