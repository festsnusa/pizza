<script setup>
const arr = [
  { "title": "Картофель из печи", "price": "179", "img": "@/assets/images/potato.svg", "additional": "Порция 95 г" },
  { "title": "Сырный соус", "price": "179", "img": "@/assets/images/potato.svg" }
]
</script>

<template>
  <div class="container">
    <div class="cards">
      <div class="card" v-for="item in arr">
        <img :src="item.img">
        <span>{{ item.title }}</span>
        <span v-if="item.additional">{{ item.additional }}</span>
        <Button :text="`${item.price} ₽`" class="bold" />
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped></style>