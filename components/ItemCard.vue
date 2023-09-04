<template>
  <div class="container">
    <div class="left">
      <NewLabel v-if="item.status" :title="item.status" />
      <img :src="imgSrc" alt="item">
    </div>
    <div class="right">
      <div class="right__header">
        <p class="right__title">{{ item.title }}</p>
        <img src="@/assets/images/info.png" alt="info">
      </div>
      <Ingredients />
      <div class="footer">
        <Button text="Выбрать" />
        <span class="footer__price">от {{ item.price }} ₽</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import json from '@/assets/data.json';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const item = json.filter(e => e.id == props.id)[0]

const imgSrc = computed(() => {
  // console.log(item)
  return `/_nuxt/assets/images/${item.type}/${item.img}`
})

console.log(props.id)
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  display: flex;
}

.right {

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: start;

  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}



.footer {
  &__price {
    color: #FF7010;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
}
</style>