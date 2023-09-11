<template>
  <div class="container" id="actions">
    <div class="cards">
      <a class="card" v-for="item in arr" :href="`#${item.id}`">
        <img :src="item.src">
        <span>{{ item.title }}</span>
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const arr = [
  { "title": "Акции", "src": "_nuxt/assets/images/categories/fire.svg", "id": "actions" },
  { "title": "Пицца", "src": "_nuxt/assets/images/categories/pizza.svg", "id": "pizza" },
  { "title": "Суши", "src": "_nuxt/assets/images/categories/sushi.svg", "id": "sushi" },
  { "title": "Напитки", "src": "_nuxt/assets/images/categories/drink.svg", "id": "drinks" },
  { "title": "Закуски", "src": "_nuxt/assets/images/categories/snacks.svg", "id": "snacks" },
  { "title": "Комбо", "src": "_nuxt/assets/images/categories/combo.svg", "id": "combo" },
  { "title": "Десерты", "src": "_nuxt/assets/images/categories/desserts.svg", "id": "desserts" },
  { "title": "Соусы", "src": "_nuxt/assets/images/categories/sauces.svg", "id": "sauces" },
]
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