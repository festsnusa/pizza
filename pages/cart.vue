<template>
  <main>
    <CartItems />
    <Promocode :total="currentTotal" />
    <SliderSnacks />
    <SliderSauces />
    <Contact />
  </main>
</template>

<script setup>
const { currentTotal } = useCart()
</script>

<style lang="scss" scoped>
main {
  padding: 0 5rem;
  background-color: #F9F9F9;
}
</style>