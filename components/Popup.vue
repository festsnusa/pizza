<template>
  <div class="container">
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  right: 3rem;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  background-color: #fff;
  padding: 12px 32px 12px 32px;
  border-radius: 58px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>