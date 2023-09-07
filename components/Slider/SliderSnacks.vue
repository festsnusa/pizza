<template>
  <div class="slider-container">
    <h1>Добавить к заказу?</h1>
    <swiper-container navigation="true" :slides-per-view="4" :space-between="50">
      <swiper-slide class="slider" v-for="(snack, i) in snacks" :key="`snack__${i}`">
        <img :src="`/_nuxt/assets/images/snacks/${snack.img}`" :alt="snack.title">
        <p>{{ snack.title }}</p>
        <span>Порция 95 г</span>
        <Button text="179 ₽" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
register();

const snacks = [
  { "title": "Картофель из печи", "img": "1.png" },
  { "title": "Филадельфия крем-брюле", "img": "2.png" },
  { "title": "Супер Филадельфия", "img": "3.png" },
  { "title": "Тигр мама", "img": "4.png" },
  { "title": "Супер Филадельфия", "img": "3.png" },
  { "title": "Филадельфия крем-брюле", "img": "2.png" },
  { "title": "Тигр мама", "img": "4.png" },
  { "title": "Картофель из печи", "img": "1.png" },
]
</script>

<style lang="scss" scoped>
p {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 0;
}

span {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
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