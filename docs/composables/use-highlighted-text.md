# useHighlightedText

Возвращает строку с указанным текстом, выделенным с помощью HTML-тегов `<mark>`. Для вывода в HTML необходимо использовать директиву `v-html`.

## Параметры

- `text` — текст строки, в которой нужно выделить текст.
- `query` — текст, который нужно выделить.

## Использование

```vue
<script setup lang="ts">
// Вернет строку 'Hello, <mark>world</mark>!'
const highlightedText = useHighlightedText('Hello, world!', 'world');
</script>

<template>
  <div>
    <p v-html="highlightedText" />
  </div>
</template>
```
