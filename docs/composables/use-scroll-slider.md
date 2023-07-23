# useScrollSlider

Данная функция позволяет скроллить контейнер вправо либо влево на ширину контейнера.

## Параметры

- `sliderRef` - `ref` контейнера, который нужно скроллить.

## Возвращаемые методы

- `isLeftCorner` - Проскроллен ли контейнер полностью влево.
- `isRightCorner` - Проскроллен ли контейнер полностью вправо.
- `scrollLeft` - функция для скролла влево.
- `scrollRight` - функция для скролла вправо.

## Использование

```ts
/** `ref` слайдера */
const sliderRef = ref<HTMLElement>()

const { isLeftCorner, isRightCorner, scrollLeft, scrollRight } =
  useScrollSlider(sliderRef)
```

```html
<div ref="sliderRef">
  <button :class="{ hidden: isLeftCorner }" @click="scrollLeft">
    Скролл влево
  </button>
  <button :class="{ hidden: isRightCorner }" @click="scrollRight">
    Скролл вправо
  </button>
</div>
```
