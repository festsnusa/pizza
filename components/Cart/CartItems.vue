<script setup lang="ts">
const { currentCart } = useCart()
</script>

<template>
  <div class="cart" v-for="(cart, i) in currentCart" :key="`cart__${i}`">
    <div class="left">
      <img :src="`/_nuxt/assets/images/${cart.item.type}/${cart.item.img}`" alt="item">
      <div class="description">
        <span class="title">{{ cart.item.title }}</span>
        <span class="subtitle">Традиционное тесто, 23 см</span>
      </div>
    </div>

    <div class="right">
      <Counter :amount="1" :index="i" />
      <span class="total">{{ cart.total }} ₽</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  align-items: center;
  gap: 1rem;

}

.right {
  span {
    color: #FF7010;
    font-weight: bold;
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.title {
  font-weight: 600;
  font-size: 20px;
}

.subtitle {
  font-weight: 400;
  font-size: 1rem;
}
</style>