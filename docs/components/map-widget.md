<script setup>
import UtilsMapWidget from '../../src/runtime/components/UtilsMapWidget.vue'
</script>

# UtilsMapWidget

Данный компонент выводит виджет Яндекс Карт.

Для работы данного компонента необходимо передать в него `ID` виджета Яндекс Карт.

::: tip Как получить `ID` виджета Яндекс Карт
Для того, чтобы его получить необходимо:

- Выбрать интересующее место на карте
- Нажать в правом верхнем углу на три точки
- Нажать «Поделиться»
- Откроется окно, в котором будет поле «Ссылка на карту»
- Из этого поля нас интересует только последняя часть. Например, если в поле написано `https://yandex.ru/maps/-/CCUSULgkSA`, то в пропс нам необходимо передать только `CCUSULgkSA`
:::

## Пропсы

- `widgetId` — `ID` виджета Яндекс Карт.

## Использование

```vue
<template>
  <UtilsMapWidget widget-id="widget-id" />
</template>
```

<UtilsMapWidget />

## Стилизация

Для стилизации нужно выставлять классы и стили на компонент, а они будут автоматически присвоены карте.

```vue
<template>
  <UtilsMapWidget style="height: 450px; border-radius: 1rem;" widget-id="widget-id" />
</template>
```

<UtilsMapWidget style="height: 450px; border-radius: 1rem;" />
