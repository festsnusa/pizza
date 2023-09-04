<template>
  <div class="ingredients">
    <ul>
      <li v-for="(item, i) in items" :key="`ingredients__${i}`">
        <img :src="`/_nuxt/assets/images/ingredients/${item.img}`" alt="item.title">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  { "title": "Моцарелла", "img": "mozarella.png" },
  { "title": "Огурцы маринованные", "img": "pickles.png" },
  { "title": "Пепперони", "img": "pepperoni.png" },
  { "title": "Томатный соус", "img": "sauce.png" },
]
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
</style>