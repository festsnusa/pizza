<template>
  <div class="container">
    <div class="container__left">
      <div class="left">
        <NewLabel class="left__label" v-if="item.status" :title="item.status" />
        <img :src="imgSrc" alt="item">
      </div>
      <div class="right">
        <div class="right__header">
          <p class="right__title">{{ item.title }}</p>
          <img src="@/assets/images/info.png" alt="info">
        </div>
        <Ingredients />
        <div class="right__type">
          <ButtonSwitch :items="[{ title: 'Традиционное' }, { title: 'Тонкое' }]" />
        </div>
        <div class="right__sizes">
          <ButtonSwitch :items="[
            { title: '20 см' }, { title: '28 см' }, { title: '33 см' }
          ]" />
        </div>
        <div class="right__additional">
          <p class="right__title">Добавьте в пиццу</p>
          <IngredientsAdditional @changeTotal="changeTotal" />
        </div>
        <div class="footer">
          <div class="footer__left">
            <p>Итого: {{ total }} ₽</p>
            <span>400 г</span>
          </div>
          <div class="footer__right">
            <NuxtLink to="/">
              <Button text="Добавить" @click="confirm" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="container__right">
      <NuxtLink to="/">
        <img class="close" src="@/assets/images/icon-close.png" alt="close" @click="toggleModal">
      </NuxtLink>
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

const { addToCart } = useCart()
const { toggleItem } = useItem()

const item = json.filter(e => e.id == props.id)[0]
const total = ref(item.price)

const imgSrc = computed(() => {
  return `/_nuxt/assets/images/${item.type}/${item.img}`
})

const changeTotal = (itemsLength) => {
  if (itemsLength === 0) {
    total.value = item.price
    return
  }
  total.value = item.price + (59 * itemsLength)
}

const confirm = () => {
  addToCart(item, total.value)
  toggleModal()
}

const toggleModal = () => {
  toggleItem(false)
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.container {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  gap: 5rem;
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__left {
    background-color: #fff;
    border-radius: 24px;
  }
}

.left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__label {
    position: absolute;
    left: -2rem;
    top: 0;
  }

}

.right {

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}



.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__price {
    color: #FF7010;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  &__left {
    display: flex;
    gap: 1rem;
    align-items: center;

    p {
      color: #FF7010;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 0;
    }

    span {
      color: #A5A5A5;
    }
  }
}
</style>