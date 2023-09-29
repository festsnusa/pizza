<template>
  <ul>
    <li v-for="(image, i) in imagesArr" :key="`images_${i}`">
      <img :src="images[image]" alt="image">
    </li>
  </ul>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils'

const glob = import.meta.glob('~/assets/images/promos/*.png', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const imagesArr: string[] = ["promo-1", "promo-2", "promo-1", "promo-2"]
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 1rem;
}

li {
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
}
</style>