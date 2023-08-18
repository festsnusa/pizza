<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <div class="location">
          <img src="../assets/images/location.svg" alt="location">
          <span>Москва</span>
        </div>
        <div class="address">
          <span>Проверить адрес</span>
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
        <div class="account">
          <img src="../assets/images/account.svg" alt="account">
          <span>Войти в аккаунт</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="logo">
          <img src="../assets/images/logo.svg" alt="logo">
          <span>Куда пицца</span>
        </div>
        <slot></slot>
      </div>
      <div class="right">
        <button>
          <img src="../assets/images/shopping-bag.svg" alt="bag">
          <span>{{ total }} ₽</span>
        </button>

      </div>
    </div>

  </div>
</template>

<script setup>
const time = ref("00:00:00")
const total = ref(0)
</script>

<style lang="scss" scoped>
.delivery-time {

  &__time {
    font-weight: bold;
  }
}
</style>
