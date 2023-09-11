<template>
  <div class="content">
    <p class="content__title">{{ title }}</p>
    <ul>
      <li v-for="(button, i) in buttons" :key="`buttons__${i}`">
        <Button :text="button.label" :class="button.buttonClass" @click="toggleButton(button)" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(["toggleChosen"])

const toggleButton = (button) => {
  emit("toggleChosen", button, props.type)
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.content {
  &__title {
    color: #AAAAAA;
    padding: 1rem 0;
  }
}
</style>