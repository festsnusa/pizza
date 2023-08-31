<script setup>
const chosen = ref([])
const { toggleFilterMenu } = useFilter()

const manual = [
  { "title": "hit", "label": "Хит", "buttonClass": "white" },
  { "title": "new", "label": "Новинка", "buttonClass": "white" },
  { "title": "meat", "label": "С мясом", "buttonClass": "white" },
  { "title": "vegetarian", "label": "Вегетарианская", "buttonClass": "white" },
  { "title": "chicken", "label": "С курицей", "buttonClass": "white" },
  { "title": "onion-free", "label": "Без лука", "buttonClass": "white" },
  { "title": "shrooms", "label": "С грибами", "buttonClass": "white" },
  { "title": "seafood", "label": "С морепродуктами", "buttonClass": "white" },
  { "title": "bbq", "label": "Барбекью", "buttonClass": "white" },
]

const cheese = [
  { "title": "reggianito", "label": "Реджанито", "buttonClass": "white" },
  { "title": "mozzarella", "label": "Моцарелла", "buttonClass": "white" },
  { "title": "cheddar", "label": "Чеддер", "buttonClass": "white" },
  { "title": "blue-mold", "label": "С голубой плесенью", "buttonClass": "white" },
  { "title": "italian", "label": "Смесь итальянских сыров", "buttonClass": "white" },
  { "title": "soft", "label": "Мягкий молодой сыр", "buttonClass": "white" },
]

const meat = [
  { "title": "pepperoni", "label": "Пепперони", "buttonClass": "white" },
  { "title": "pork", "label": "Свинина", "buttonClass": "white" },
  { "title": "ham", "label": "Ветчина", "buttonClass": "white" },
  { "title": "bacon", "label": "Бекон", "buttonClass": "white" },
  { "title": "beef", "label": "Говядина", "buttonClass": "white" },
  { "title": "chorizo", "label": "Чоризо", "buttonClass": "white" },
  { "title": "sausages", "label": "Колбаски", "buttonClass": "white" },
  { "title": "chicken-breast", "label": "Куриная грудка", "buttonClass": "white" },
]

const component = [
  { "title": "shrimp", "label": "Креветка", "buttonClass": "white" },
  { "title": "pineapple", "label": "Ананасы", "buttonClass": "white" },
  { "title": "champignon", "label": "Шампиньоны", "buttonClass": "white" },
  { "title": "onion", "label": "Лук", "buttonClass": "white" },
  { "title": "jalapeno", "label": "Перец халапеньо", "buttonClass": "white" },
  { "title": "oregano", "label": "Орегано", "buttonClass": "white" },
  { "title": "green-pepper", "label": "Зеленый перец", "buttonClass": "white" },
  { "title": "tomatoes", "label": "Томаты", "buttonClass": "white" },
  { "title": "garlic", "label": "Чеснок", "buttonClass": "white" },
  { "title": "red-pepper", "label": "Красный перец", "buttonClass": "white" },
  { "title": "olives", "label": "Оливки", "buttonClass": "white" },
  { "title": "black-olives", "label": "Маслины", "buttonClass": "white" },
  { "title": "strawberries", "label": "Клубника", "buttonClass": "white" },
  { "title": "italian-blend", "label": "Смесь итальянских трав", "buttonClass": "white" },
]
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Фильтры</h1>
      <img class="header__close" src="_nuxt/assets/images/icon-close.png" alt="close" @click="toggleFilterMenu(false)">
    </div>
    <FilterContent title="Общее" :buttons="manual" />
    <FilterContent title="Сыр" :buttons="cheese" />
    <FilterContent title="Мясо" :buttons="cheese" />
    <FilterContent title="Компонент" :buttons="component" />
    <div class="footer">
      <Button text="Сбросить" @click="reset" />
      <Button text="Применить" @click="apply" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 33.33%;
  min-width: 100px;
  max-width: 1000px;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__close {
    cursor: pointer;
  }
}
</style>