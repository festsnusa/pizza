<template>
  <div class="content">
    <span>{{ title }}</span>
    <ul>
      <li v-for="(button, i) in buttons" :key="`buttons__${i}`">
        <Button :text="button.label" :class="buttonClass" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>