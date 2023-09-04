<template>
  <div class="container">
    <div class="first">
      <div class="top">
        <NuxtLink to="/" class="logo">
          <img src="@/assets/images/logo.svg" alt="logo">
          <span>Куда пицца</span>
        </NuxtLink>
      </div>
      <div class="bottom">
        <span>© Copyright 2021 — Куда Пицца</span>
      </div>
    </div>
    <div class="second">
      <h2>Куда пицца</h2>
      <ul>
        <NuxtLink v-for="(item, i) in getShortList(0, 3)" :to="item.link">
          <li>{{ item.title }}</li>
        </NuxtLink>

      </ul>
    </div>
    <div class="third">
      <h2>Помощь</h2>
      <ul>
        <NuxtLink v-for="(item, i) in getShortList(3, 7)" :to="item.link" :key="`item-link__${i}`">
          <li>{{ item.title }}</li>
        </NuxtLink>
      </ul>
    </div>
    <div class="fourth">
      <h2>Контакты</h2>
      <ul>
        <NuxtLink v-for="(contact, i) in contacts" :key="`contact__${i}`" :to="contact.link" target="_blank">
          <li>
            <img :src="`_nuxt/assets/images/${contact.title}.svg`" :alt="contact.title">
            <span>{{ contact.span }}</span>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    "title": "О компании", "link": "about"
  },
  {
    "title": "Пользовательское соглашение", "link": "terms-of-use"
  },
  { "title": "Условия гарантии", "link": "warranty-terms" },
  { "title": "Ресторан", "link": "restaurant" },
  { "title": "Контакты", "link": "contacts" },
  { "title": "Поддержка", "link": "support" },
  {
    "title": "Отследить заказ", "link": "track-order"
  }
]

const contacts = [
  {
    "title": "phone", "span": "+7 (926) 223-10-11"
  },
  {
    "title": "location", "span": "Москва, ул. Юных Ленинцев, д.99"
  },
  {
    "title": "facebook", "span": "Facebook", "link": "https://www.facebook.com"
  },
  {
    "title": "instagram", "span": "Instagram", "link": "https://www.instagram.com"
  }
]

const getShortList = (i, j) => {
  return links.slice(i, j)
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
}

li {
  list-style: none;
}

.container {
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  line-height: 2.5rem;
  border-top: 1px solid #F0F0F0;
}

.first {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>