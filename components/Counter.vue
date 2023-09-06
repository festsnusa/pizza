<template>
  <div class="counter">
    <button class="counter__minus" @click="changeAmount('-')">-</button>
    <span>{{ amount }}</span>
    <button class="counter__plus" @click="changeAmount('+')">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
})

const emit = defineEmits(["changeAmount"])

const changeAmount = (operation) => {
  emit("changeAmount", props.amount, operation, props.index)
}
</script>

<style lang="scss" scoped>
button,
span {
  background-color: #FFEEE2;
  padding: 1rem;
  color: #FF7010;
  font-weight: 600;
}

button {
  cursor: pointer;
  border: none;
}

.counter {

  display: flex;
  align-items: center;

  &__minus {
    border-radius: 10px 0 0 10px;
  }

  &__plus {
    border-radius: 0 10px 10px 0;
  }
}
</style>