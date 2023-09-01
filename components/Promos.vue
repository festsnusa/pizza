<template>
  <ul>
    <li v-for="(image, i) in images" :key="`images_${i}`">
      <img :src="`_nuxt/assets/images/promos/${image}`" alt="image">
    </li>
  </ul>
</template>

<script setup>
const images = ["promo-1.png", "promo-2.png", "promo-1.png", "promo-2.png"]
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 1rem;
}

li {
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
}
</style>