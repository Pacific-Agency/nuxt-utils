<script setup>
import MapWidget from '../../src/runtime/components/MapWidget.vue'
</script>

# MapWidget

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
  <MapWidget widget-id="widget-id" />
</template>
```

<MapWidget />

## Стилизация

Для стилизации нужно выставлять классы и стили на компонент, а они будут автоматически присвоены карте.

```vue
<template>
  <MapWidget style="height: 450px; border-radius: 1rem;" widget-id="widget-id" />
</template>
```

<MapWidget style="height: 450px; border-radius: 1rem;" />
