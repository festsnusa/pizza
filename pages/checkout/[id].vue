<template>
  <div>
    <img src="@/assets/images/courier.png" alt="courier">
    <h1>Заказ №{{ route.params.id }} принят</h1>
    <p>Спасибо за заказ! Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="scss" scoped></style>