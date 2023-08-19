<template>
  <div class="container">
    <div class="left">
      <span class="total">Итого: {{ total }} ₽</span>
      <span class="grams" v-show="isGrams">{{ grams }} г</span>
    </div>
    <div class="right">
      <button v-if="isGrams">В корзину</button>
      <button v-else>Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
const isGrams = ref(true)
const total = ref(0)
const grams = ref(0)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  padding: 1rem;
}

.total {
  color: #FF7010;
  font-size: 18px;
  font-weight: 600;
}

.grams {
  color: #A5A5A5;
}

.left {
  display: flex;
  flex-direction: column;
}

.right {
  button {
    padding: 1rem 2rem;
    border: none;
    background-color: #FF7010;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
}
</style>