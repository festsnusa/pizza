<template>
  <ItemCard :id="route.params.id" />
</template>

<script setup>
const route = useRoute()
</script>

<style lang="scss" scoped></style>