<template>
  <div class="container">
    <NewLabel v-if="label" />
    <img src="" alt="pizzaItem">
    <div class="caption">
      <p class="title">Пепперони по-деревенски</p>
      <p class="subtitle">Огурцы маринованные,</p>
    </div>
    <div class="footer">
      <Button text="Выбрать" />
      <span class="price">от 399 ₽</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang="scss" scoped>
.container {
  // position: absolute;
}

.price {
  color: #FF7010;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
</style>