<template>
  <label for="">{{ title }}</label>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: () => "New"
  }
})
</script>

<style lang="scss" scoped>
label {
  // position: absolute;
  text-transform: uppercase;
  background-color: #E23535;
  color: #fff;
  border-radius: 0 10px 10px 0;
  padding: 1rem 1.5rem;
}
</style>