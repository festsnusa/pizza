<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Вход в аккаунт</h1>
      <p class="subtitle">Сможете быстро оформлять заказы, использовать бонусы</p>
      <Form @submit="onSubmit" class="form">
        <input v-focus />
        <label for="tel" class="label">Номер телефона</label>
        <Field name="tel" type="tel" class="field" :rules="validateEmail" vMask placeholder="+7" />
        <ErrorMessage name="tel" class="error" />
        <Button text="Войти" />
      </Form>
      <p class="consent">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским
        соглашением</p>
    </div>
    <img class="close" src="_nuxt/assets/images/icon-close.png" alt="close" @click="toggleModal">
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';

const { toggleModal } = useAuth();

const onSubmit = values => {
  console.log(JSON.stringify(values, null, 2));
}
const validateEmail = value => {
  if (!value) {
    return 'Заполните номер телефона';
  }
  else if (value.length < 17) {
    return 'Заполните номер телефона';
  }
  return true
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: baseline;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F9F9F9;
  border-radius: 24px;
  padding: 6rem;

  p {
    text-align: center;
  }
}

.close {
  color: red;
}

.subtitle {
  max-width: 380px;
}

.label,
.consent,
.field,
.error {
  color: #A4A4A4;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  // max-width: 320px;
}

.close {
  cursor: pointer;
}
</style>