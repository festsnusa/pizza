<script setup>
const chosen = ref([])
const { toggleFilterMenu } = useFilter()

const manual = ref([
  { "id": 1, "title": "hit", "label": "Хит", "buttonClass": "white" },
  { "id": 2, "title": "new", "label": "Новинка", "buttonClass": "white" },
  { "id": 3, "title": "meat", "label": "С мясом", "buttonClass": "white" },
  { "id": 4, "title": "vegetarian", "label": "Вегетарианская", "buttonClass": "white" },
  { "id": 5, "title": "chicken", "label": "С курицей", "buttonClass": "white" },
  { "id": 6, "title": "onion-free", "label": "Без лука", "buttonClass": "white" },
  { "id": 7, "title": "shrooms", "label": "С грибами", "buttonClass": "white" },
  { "id": 8, "title": "seafood", "label": "С морепродуктами", "buttonClass": "white" },
  { "id": 9, "title": "bbq", "label": "Барбекью", "buttonClass": "white" },
])

const cheese = ref([
  { "id": 10, "title": "reggianito", "label": "Реджанито", "buttonClass": "white" },
  { "id": 11, "title": "mozzarella", "label": "Моцарелла", "buttonClass": "white" },
  { "id": 12, "title": "cheddar", "label": "Чеддер", "buttonClass": "white" },
  { "id": 13, "title": "blue-mold", "label": "С голубой плесенью", "buttonClass": "white" },
  { "id": 14, "title": "italian", "label": "Смесь итальянских сыров", "buttonClass": "white" },
  { "id": 15, "title": "soft", "label": "Мягкий молодой сыр", "buttonClass": "white" },
])

const meat = ref([
  { "id": 16, "title": "pepperoni", "label": "Пепперони", "buttonClass": "white" },
  { "id": 17, "title": "pork", "label": "Свинина", "buttonClass": "white" },
  { "id": 18, "title": "ham", "label": "Ветчина", "buttonClass": "white" },
  { "id": 19, "title": "bacon", "label": "Бекон", "buttonClass": "white" },
  { "id": 20, "title": "beef", "label": "Говядина", "buttonClass": "white" },
  { "id": 21, "title": "chorizo", "label": "Чоризо", "buttonClass": "white" },
  { "id": 22, "title": "sausages", "label": "Колбаски", "buttonClass": "white" },
  { "id": 23, "title": "chicken-breast", "label": "Куриная грудка", "buttonClass": "white" },
])

const component = ref([
  { "id": 24, "title": "shrimp", "label": "Креветка", "buttonClass": "white" },
  { "id": 25, "title": "pineapple", "label": "Ананасы", "buttonClass": "white" },
  { "id": 26, "title": "champignon", "label": "Шампиньоны", "buttonClass": "white" },
  { "id": 27, "title": "onion", "label": "Лук", "buttonClass": "white" },
  { "id": 28, "title": "jalapeno", "label": "Перец халапеньо", "buttonClass": "white" },
  { "id": 29, "title": "oregano", "label": "Орегано", "buttonClass": "white" },
  { "id": 30, "title": "green-pepper", "label": "Зеленый перец", "buttonClass": "white" },
  { "id": 31, "title": "tomatoes", "label": "Томаты", "buttonClass": "white" },
  { "id": 32, "title": "garlic", "label": "Чеснок", "buttonClass": "white" },
  { "id": 33, "title": "red-pepper", "label": "Красный перец", "buttonClass": "white" },
  { "id": 34, "title": "olives", "label": "Оливки", "buttonClass": "white" },
  { "id": 35, "title": "black-olives", "label": "Маслины", "buttonClass": "white" },
  { "id": 36, "title": "strawberries", "label": "Клубника", "buttonClass": "white" },
  { "id": 37, "title": "italian-blend", "label": "Смесь итальянских трав", "buttonClass": "white" },
])

const toggleChosen = (button, type) => {
  // console.log(button, type)

  let arr

  if (type === 'manual') {
    arr = manual
  } else if (type === 'cheese') {
    arr = cheese
  } else if (type === 'meat') {
    arr = meat
  } else if (type === 'component') {
    arr = component
  } else { return }

  const foundObject = arr.value.find(e => e.id === button.id)
  // user chose
  if (button.buttonClass === 'white') {
    foundObject.buttonClass = 'regular'
    chosen.value.push(foundObject)
    console.log(chosen.value)
  } else {
    // user deleted
    foundObject.buttonClass = 'white'
    const indexToDelete = chosen.value.findIndex(e => e.id === foundObject.id)
    chosen.value.splice(indexToDelete, 1)
    console.log(chosen.value)
  }
}

const reset = () => {
  chosen.value = []
  manual.value.forEach(e => e.buttonClass = "white")
  cheese.value.forEach(e => e.buttonClass = "white")
  meat.value.forEach(e => e.buttonClass = "white")
  component.value.forEach(e => e.buttonClass = "white")
}

const apply = () => {
  toggleFilterMenu(false)
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Фильтры</h1>
      <img class="header__close" src="_nuxt/assets/images/icon-close.png" alt="close" @click="toggleFilterMenu(false)">
    </div>
    <section class="content">
      <FilterContent title="Общее" :buttons="manual" type="manual" @toggleChosen="toggleChosen" />
      <FilterContent title="Сыр" :buttons="cheese" type="cheese" @toggleChosen="toggleChosen" :key="cheese" />
      <FilterContent title="Мясо" :buttons="meat" type="meat" @toggleChosen="toggleChosen" :key="meat" />
      <FilterContent title="Компонент" :buttons="component" type="component" @toggleChosen="toggleChosen"
        :key="component" />
    </section>
    <hr />
    <div class="footer">
      <Button text="Сбросить" v-show="chosen.length" @click="reset" class="white-orange" />
      <Button text="Применить" @click="apply" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  border: 0.001px solid #F0F0F0;
}

.container {
  width: 33.33%;
  min-width: 100px;
  max-width: 1000px;

  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 15;
}

.header {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;

  &__close {
    cursor: pointer;
  }
}

.content {
  padding: 0 1rem;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 2rem;
}
</style>