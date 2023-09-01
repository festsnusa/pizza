<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  class: {
    type: String,
    default: () => 'regular'
  }
})
</script>

<template>
  <button :class="props.class">
    <slot />
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  background-color: #FF7010;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}

.bold {
  font-weight: bold;
}

.white {
  background-color: #fff;
  border: 1px solid #F0F0F0;
  color: #000;
  font-weight: 400;
}

.white-orange {
  border: 1px solid #F0F0F0;
  background-color: #fff;
  color: #FF7010;
}
</style>