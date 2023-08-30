<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul class="cards">
      <li class="card" v-for="(item, i) in data" :key="`item__${i}`">
        <NewLabel v-if="item.status === 'new'" />
        <NewLabel v-if="item.status === 'hit'" title="Хит" />
        <img :src="`_nuxt/assets/images/${type}/${item.img}`" :alt="item.title">
        <span>{{ item.title }}</span>
        <span>{{ item.composition }}</span>
        <Button text="Выбрать" />
        <span>от {{ item.price }} ₽</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import json from '../assets/data.json'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isFilter: {
    type: Boolean,
    default: () => false,
  }
})

const data = json.filter(e => e.type == props.type)
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.container {
  padding: 3rem 5rem;
}

.cards {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
}

.card {
  max-width: 19rem;
}
</style>