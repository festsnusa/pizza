<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: () => 'regular'
  }
})
</script>

<template>
  <button :class="props.class">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  color: #fff;
  background-color: #FF7010;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-size: 1rem;
}

.bold {
  font-weight: bold;
}
</style>