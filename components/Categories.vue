<template>
  <div class="container">
    <div class="cards">
      <div class="card" v-for="item in arr">
        <img :src="item.src">
        <span>{{ item.title }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
const arr = [
  { "title": "Акции", "src": "/_nuxt/assets/images/categories/fire.svg" },
  { "title": "Пицца", "src": "/_nuxt/assets/images/categories/pizza.svg" },
  { "title": "Суши", "src": "/_nuxt/assets/images/categories/sushi.svg" },
  { "title": "Напитки", "src": "/_nuxt/assets/images/categories/drink.svg" },
  { "title": "Закуски", "src": "/_nuxt/assets/images/categories/snacks.svg" },
  { "title": "Комбо", "src": "/_nuxt/assets/images/categories/combo.svg" },
  { "title": "Десерты", "src": "/_nuxt/assets/images/categories/desserts.svg" },
  { "title": "Соусы", "src": "/_nuxt/assets/images/categories/sauces.svg" },
]
</script>

<style lang="scss" scoped>
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