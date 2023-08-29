<template>
  <a-checkbox-group v-model:value="checkedList" :options="options" />
</template>

<script setup>

const checkedList = ref(['Apple', 'Orange'])
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>