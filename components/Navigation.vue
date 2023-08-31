<template>
  <ul>
    <li v-for="(item, i) in items" :key="`nav__${i}`">
      <a :href="`#${item.id}`">{{ item.title }}</a>
    </li>
    <li>
      <Dropdown />
    </li>
  </ul>
</template>

<script setup>
const items = [
  { "title": "Акции", "id": "actions" },
  { "title": "Пицца", "id": "pizza" },
  { "title": "Суши", "id": "sushi" },
  { "title": "Напитки", "id": "drinks" },
  { "title": "Закуски", "id": "snacks" },
  { "title": "Комбо", "id": "combo" },
  { "title": "Десерты", "id": "desserts" },
  { "title": "Соусы", "id": "sauces" }
]
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #191919;
}

ul {
  list-style: none;
  display: flex;
  align-items: self-end;
  gap: 2rem;
}
</style>