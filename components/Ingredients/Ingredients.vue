<template>
  <div class="ingredients">
    <ul>
      <li v-for="(item, i) in items" :key="`ingredients__${i}`">
        <img :src="images[item.img]" alt="item.title">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils'

const glob = import.meta.glob('~/assets/images/ingredients/*.png', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const items = [
  { "title": "Моцарелла", "img": "mozarella", "available": true },
  { "title": "Огурцы маринованные", "img": "pickles", "available": false },
  { "title": "Пепперони", "img": "pepperoni", "available": true },
  { "title": "Томатный соус", "img": "sauce", "available": true },
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