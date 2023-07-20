# useScrollSlider

Данная функция позволяет скроллить контейнер вправо либо влево на ширину контейнера.

## Параметры

- `sliderRef` - `ref` контейнера, который нужно скроллить.

## Возвращаемые методы

- `leftCorner` - Проскроллен ли контейнер полностью влево.
- `rightCorner` - Проскроллен ли контейнер полностью вправо.
- `scrollLeft` - функция для скролла влево.
- `scrollRight` - функция для скролла вправо.

## Использование

```ts
/** `ref` слайдера */
const sliderRef = ref<HTMLElement>()

const { leftCorner, rightCorner, scrollLeft, scrollRight } =
  useScrollSlider(sliderRef)
```

```html
<div ref="sliderRef">
  <button :class="{ hidden: leftCorner }" @click="scrollLeft">
    Скролл влево
  </button>
  <button :class="{ hidden: rightCorner }" @click="scrollRight">
    Скролл вправо
  </button>
</div>
```
