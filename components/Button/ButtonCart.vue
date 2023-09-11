<template>
  <Button :text="`${currentTotal} ₽`" @click="toggleCartSidebar(true)">
    <img src="@/assets/images/shopping-bag.svg" alt="cart">
  </Button>
</template>

<script setup lang="ts">
const { currentTotal, toggleCartSidebar } = useCart()
</script>

<style lang="scss" scoped></style>