<template>
  <div class="sidebar">
    {{ currentCart }}
    <div class="sidebar__header">
      <h1 class="sidebar__title">Ваш заказ</h1>
      <img src="../../assets/images/icon-close.png" alt="close" @click="toggleCartSidebar(false)">
    </div>
    <section class="sidebar__content">
      <div class="card" v-for="(cart, i) in currentCart">
        <div class="card__left">
          <img :src="`_nuxt/assets/images/${cart.item.type}/${cart.item.img}`" :alt="cart.item.title">
        </div>
        <div class="card__right">
          <h2 class="card__title">{{ cart.item.title }}</h2>
          <p>Традиционное тесто, 23 см</p>
          <div class="card__footer">
            <div class="card__counter">
              <Counter :amount="amounts[i]" :index="i" @changeAmount="changeAmount" />
            </div>
            <div class="card__price">{{ cart.total }} ₽</div>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <div class="sidebar__footer">
      <span>Итого: {{ currentTotal }} ₽</span>
      <NuxtLink to="/cart/" v-show="currentTotal">
        <Button text="Оформить заказ" />
      </NuxtLink>
    </div>
    <!-- {{ currentCart }} -->
  </div>
</template>

<script setup lang="ts">
const { currentCart, currentTotal, toggleCartSidebar, deleteItem } = useCart()

const amounts = ref(Array(currentCart.value.length).fill(1))
console.log(amounts.value)

const changeAmount = (amount, operation, index) => {
  console.log(amount, operation, index)

  if (operation == '-') {
    amount--
  } else {
    amount++
  }

  if (amount === 0) {
    deleteItem(index)
  }
}
</script>

<style lang="scss" scoped>
hr {
  border: 0.001px solid #F0F0F0;
}

a {
  text-decoration: none;
}

.sidebar {
  // width: 33.33%;
  min-width: 100px;
  max-width: 1000px;

  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 15;

  &__header,
  &__content,
  &__footer {
    padding: 1rem 2rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    margin-bottom: 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #FF7010;
      font-weight: 600;
      font-size: 20px;
    }

  }
}

.card {
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #F0F0F0;

  display: flex;
  align-items: center;
  gap: 2rem;

  &__title {
    font-weight: 600;
  }

  &__price {
    color: #FF7010;
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
  }

  &__left {
    img {
      max-width: 94px;
    }
  }

  &__right {
    width: 100%;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>