<template>
  <div class="container" id="actions">
    <div class="cards">
      <a class="card" v-for="(item, i) in arr" :key="`card__${i}`" :href="`#${item.id}`">
        <img :src="images[item.src]">
        <span>{{ item.title }}</span>
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils';

interface ItemType {
  title: string;
  src: string;
  id: string;
}

const arr: ItemType[] = [
  { "title": "Акции", "src": "fire", "id": "actions" },
  { "title": "Пицца", "src": "pizza", "id": "pizza" },
  { "title": "Суши", "src": "sushi", "id": "sushi" },
  { "title": "Напитки", "src": "drink", "id": "drinks" },
  { "title": "Закуски", "src": "snacks", "id": "snacks" },
  { "title": "Комбо", "src": "combo", "id": "combo" },
  { "title": "Десерты", "src": "desserts", "id": "desserts" },
  { "title": "Соусы", "src": "sauces", "id": "sauces" },
]

const glob = import.meta.glob('~/assets/images/categories/*.svg', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.card {
  width: 135px;
  height: 104px;
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}
</style>