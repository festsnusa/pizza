<template>
  <div class="container">
    <CartItems />
    <Promocode :total="currentTotal" />
  </div>
</template>

<script setup>
const { currentTotal } = useCart()
</script>

<style lang="scss" scoped>
.container {
  padding: 0 5rem;
}
</style>