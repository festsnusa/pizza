<script setup>
const title = ref("Пепперони по-деревенски")
const subtitle = ref("Традиционное тесто, 23 см")
const count = ref(0)
const price = ref(399)
const total = computed(() => {
  return count.value * price.value
})

const completedItems = computed(() => {
  return todoList.value.filter(item => item.completed)
})

const lowerCount = () => {
  count.value--
  count.value = (count.value < 0) ? 0 : count.value
}
</script>

<template>
  <div class="container">
    <div class="left">
      <img src="@/assets/images/item.svg" alt="item">
      <div class="description">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>

    <div class="right">
      <div class="counter">
        <span class="counter__button" @click="lowerCount('-')">-</span>
        <span>{{ count }}</span>
        <span class="counter__button" @click="count++">+</span>
      </div>
      <span class="total">{{ total }} ₽</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  align-items: center;
  gap: 1rem;

}

.right {
  span {
    color: #FF7010;
    font-weight: bold;
  }
}

.counter {
  background-color: #FFEEE2;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1rem;


}

.description {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.title {
  font-weight: 600;
  font-size: 20px;
}

.subtitle {
  font-weight: 400;
  font-size: 1rem;
}

.counter {

  &__button {
    cursor: pointer;
  }
}
</style>