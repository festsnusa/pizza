<template>
  <label v-if="label">{{ label }} <span v-if="required">*</span></label>
  <Field v-if="!options.length" :name="name" class="field" :rules="validateField" :placeholder="placeholder" />
  <Field v-else :name="name" class="field" :rules="validateField" :placeholder="placeholder" as="select">
    <option v-for="(option, i) in options" :key="`option__${i}`" :value="option">{{ option }}</option>
  </Field>
  <ErrorMessage :name="name" class="error" />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  options: {
    type: Array,
    default: () => [],
  }
})

const validateField = value => {
  if (!value) {
    return 'Заполните это поле';
  }
  return true
}
</script>

<style lang="scss" scoped></style>