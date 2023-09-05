<template>
  <Main />
  <ItemCard :id="route.params.id" />
</template>

<script setup>
const route = useRoute()

const { toggleItem } = useItem()
toggleItem()
</script>

<style lang="scss" scoped></style>