<template>
  <div class="button-switch">
    <Button v-for="(item, i) in items" :text="item.title" :class="{ 'regular': i === 0, 'white': i > 0 }" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: Array<{ title: string }>
}>();
</script>

<style lang="scss" scoped>
.button-switch {
  display: flex;
  justify-content: space-between;
}

button {
  flex-grow: 1;
}
</style>