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

<script setup lang="ts">
const items = [
  { "title": "Моцарелла", "img": "mozarella.png", "available": true },
  { "title": "Огурцы маринованные", "img": "pickles.png", "available": false },
  { "title": "Пепперони", "img": "pepperoni.png", "available": true },
  { "title": "Томатный соус", "img": "sauce.png", "available": true },
]
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li {
  max-width: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

img {
  height: 55px;
  padding: 1rem;
  border: 1px solid #F0F0F0;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

span {
  font-size: 14px;
  text-align: center;
}
</style>