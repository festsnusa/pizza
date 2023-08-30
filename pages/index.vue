<template>
  <Header />
  <main>
    <Auth v-if="isModalVisible" />
    <Categories />
    <Promos />
    <AddressCheck />
    <Menu title="Пицца" type="pizza" :isFilter="true" />
    <DeliveryText />
  </main>
  <Footer />

  <!-- <PhoneConfirmation /> -->
</template>

<script setup>
const { isModalVisible } = useAuth();

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