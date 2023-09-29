<template>
  <Header>
    <slot>
      <ul>
        <li v-for="(item, i) in arr" :key="`short_header__${i}`">{{ item.title }}</li>
      </ul>
    </slot>
  </Header>
</template>

<script setup lang="ts">
interface ItemType {
  title: string;
  page: string;
}

const arr: ItemType[] = [
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