<template>
  <div class="container" :id="id">
    <div class="header">
      <h1>{{ title }}</h1>
      <ButtonFilter v-if="isFilter" />
    </div>

    <ul class="cards">
      <li class="card" v-for="(item, i) in data" :key="`item__${i}`">
        <NewLabel class="label" v-if="item.status === 'new'" />
        <NewLabel class="label" v-if="item.status === 'hit'" title="Хит" />
        <img :src="`@/assets/images/${type}/${item.img}`" :alt="item.title">
        <div class="card__content">
          <p class="card__title">{{ item.title }}</p>
          <p class="card__subtitle">{{ item.composition }}</p>
          <div class="card__footer">
            <Button text="Выбрать" />
            <span class="card__price">от {{ item.price }} ₽</span>
          </div>
        </div>


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
  id: {
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
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
  position: relative;
  border-radius: 1px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1rem;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content {
    padding: 1.5rem;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  &__subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    color: #FF7010;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
}

.label {
  position: absolute;
  top: 1rem;
  z-index: 5;
}
</style>