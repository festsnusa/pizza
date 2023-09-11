<template>
  <Main />
  <ItemCard :id="route.params.id" />
</template>

<script setup lang="ts">
const route = useRoute()

const { toggleItem } = useItem()

onMounted(() => {
  toggleItem(true)
})

onBeforeUnmount(() => {
  toggleItem(false)
});
</script>

<style lang="scss" scoped></style>