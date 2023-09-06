<template>
  <Button :text="`${currentTotal} ₽`">
    <img src="@/assets/images/shopping-bag.svg" alt="cart">
  </Button>
</template>

<script setup>
const { currentTotal } = useCart()
</script>

<style lang="scss" scoped></style>