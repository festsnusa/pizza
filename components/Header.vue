<script setup>
const time = ref("00:00:00")
const total = ref(0)

const { toggleModal } = useAuth();
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <div class="location">
          <img src="@/assets/images/location.svg" alt="location">
          <span>Москва</span>
          <img src="@/assets/images/icon-arrow.svg" alt="arrow">
        </div>
        <div class="address">
          <a href="#address">Проверить адрес</a>
        </div>
        <div class="delivery-time">
          <span>Средняя время доставки*:</span>
          <span class="delivery-time__time">{{ time }}</span>
        </div>
      </div>
      <div class="right">
        <div class="timetable">
          <span>Время работы: с 11:00 до 23:00</span>
        </div>
        <div class="account" @click="toggleModal">
          <img src="@/assets/images/account.svg" alt="account">
          <span>Войти в аккаунт</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <NuxtLink class="logo" to="/">
          <img src="@/assets/images/logo.svg" alt="logo">
          <span>Куда пицца</span>
        </NuxtLink>
        <slot></slot>
      </div>
      <div class="right">
        <ButtonCart />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}

.container {
  padding: 1rem 5rem 0;
  position: relative;
}

.delivery-time {

  &__time {
    font-weight: bold;
  }
}

.top,
.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 0.1px solid #F0F0F0;
}

.top {
  padding: 1.5rem 0;
}

.bottom {
  padding: 1.75rem 0;
}

.left,
.right {
  display: flex;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.account {
  cursor: pointer;
}
</style>
