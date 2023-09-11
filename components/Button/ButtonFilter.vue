<template>
  <Button class="white" @click="toggleFilterMenu(true, type)">
    <img src="@/assets/images/filter.svg" alt="filter">
    <span>Фильтры</span>
  </Button>
</template>

<script setup lang="ts">
const { toggleFilterMenu } = useFilter()

const props = defineProps({
  type: {
    type: String,
  }
})
</script>

<style lang="scss" scoped></style>