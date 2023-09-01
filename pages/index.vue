<template>
  <Overlay v-if="isFilterMenuVisible || isModalVisible" />
  <Header>
    <Navigation />
  </Header>
  <main>
    <Modal v-if="isModalVisible" />
    <Filter v-if="isFilterMenuVisible" />
    <Categories />
    <Promos />
    <AddressCheck />
    <Menu title="Пицца" type="pizza" :isFilter="true" id="pizza" />
    <Menu title="Суши" type="sushi" :isFilter="true" id="sushi" />
    <Menu title="Закуски" type="snacks" id="snacks" />
    <Menu title="Десерты" type="dessert" id="desserts" />
    <Menu title="Напитки" type="drinks" id="drinks" />
    <Menu title="Соусы" type="sauces" id="sauces" />
    <Menu title="Комбо" type="combo" id="combo" />
    <DeliveryText />
  </main>
  <Footer />
</template>

<script setup>

const isBlurred = ref(true)

const { isModalVisible } = useAuth();
const { isFilterMenuVisible } = useFilter()

const itemsSize = [
  { "title": "20 см", "value": "20" },
  { "title": "28 см", "value": "28" },
  { "title": "33 см", "value": "33" },
]

const itemsType = [
  { "title": "Традиционное", "value": "traditional" },
  { "title": "Тонкое", "value": "slim" },
]

// const options = [
//   { "title": "Как можно скорее", "value": "asap" },
//   { "title": "По времени", "value": "on-time" }
// ]

const options = [
  'Ресторан 1', 'Ресторан 2', 'Ресторан 3'
]
const selectedValue = ref("")
</script>

<style lang="scss" scoped>
main {
  background-color: #F9F9F9;
}
</style>