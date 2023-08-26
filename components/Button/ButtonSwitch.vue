<template>
  <div class="container">
    <Button v-for="(item, i) in items" :text="item.title" :class="{ 'regular': i === 0, 'white': i > 0 }" />
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
    type: Array,
  }
})
</script>

<style lang="scss" scoped></style>