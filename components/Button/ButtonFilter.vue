<template>
  <Button class="white" @click="toggleFilterMenu(true)">
    <img src="_nuxt/assets/images/filter.svg" alt="filter">
    <span>Фильтры</span>
  </Button>
</template>

<script setup>
const { toggleFilterMenu } = useFilter()
</script>

<style lang="scss" scoped></style>