<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Другое
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(option, i) in options" :key="`option__${i}`">
          <NuxtLink :to="option.link">
            {{ option.title }}
          </NuxtLink>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'

interface ItemType {
  title: string;
  link: string;
}

const options: ItemType[] = [
  { "title": "Акции", "link": "actions" },
  { "title": "О компании", "link": "about" },
  { "title": "Пользовательское соглашение", "link": "terms-of-use" },
  { "title": "Условия гарантии", "link": "warranty-terms" },
  { "title": "Ресторан", "link": "restaurant" },
  { "title": "Контакты", "link": "contacts" },
  { "title": "Поддержка", "link": "support" },
  { "title": "Отследить заказ", "link": "track-order" },
]
</script>

<style lang="scss" scoped>
.ant-dropdown-link {
  cursor: pointer;
}
</style>