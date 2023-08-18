<template>
  <Header>
    <slot>
      <ul>
        <li v-for="item in arr" :key="index">{{ item.title }}</li>
      </ul>
    </slot>
  </Header>
</template>

<script setup>
const arr = [
  { "title": "Акции", "page": "actions" },
  { "title": "Пицца", "page": "pizza" },
  { "title": "Суши", "page": "sushi" },
  { "title": "Напитки", "page": "drinks" },
  { "title": "Закуски", "page": "snacks" },
  { "title": "Комбо", "page": "combo" },
  { "title": "Десерты", "page": "desserts" },
  { "title": "Соусы", "page": "sauces" },
]
</script>

<style lang="scss" scoped></style>