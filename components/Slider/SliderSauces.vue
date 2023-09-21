<template>
  <div class="slider-container">
    <h1>Соусы</h1>
    <swiper-container navigation="true" :slides-per-view="4" :space-between="50">
      <swiper-slide class="slider" v-for="(sauce, i) in sauces" :key="`sauce__${i}`">
        <img :src="images[sauce.img]" :alt="sauce.title">
        <p>{{ sauce.title }}</p>
        <Button text="39 ₽" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";

import { filename } from 'pathe/utils'

const glob = import.meta.glob('~/assets/images/sauces/*.png', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
register();

const sauces = [
  { "title": "Сырный соус", "img": "1" },
  { "title": "Барбекю", "img": "2" },
  { "title": "Ранч", "img": "3" },
  { "title": "Сгущенка", "img": "4" },
  { "title": "Ранч", "img": "3" },
  { "title": "Барбекю", "img": "2" },
  { "title": "Сгущенка", "img": "4" },
  { "title": "Сырный соус", "img": "1" },
]
</script>

<style lang="scss" scoped>
p {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 0;
}

button {
  justify-content: center;
}

img {
  max-width: 190px;
  max-height: 190px;
  align-self: center;
}

.slider {
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 50px;
  text-align: center;
  border: 1px solid #F0F0F0;
  border-radius: 20px;
  // max-width: 250px !important;
}
</style>