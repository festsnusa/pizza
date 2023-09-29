<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';

const { setPhoneNumber } = usePhoneNumber()
const phoneFilled = ref(false)

const onSubmit = (values: any) => {
  setPhoneNumber(values['tel'])
  phoneFilled.value = true
}

const validateEmail = (value: any) => {
  if (!value) {
    return 'Заполните номер телефона';
  }
  else if (value.length < 17) {
    return 'Заполните номер телефона';
  }
  return true
}
</script>

<template>
  <div class="content" v-if="!phoneFilled">
    <h1 class="title">Вход в аккаунт</h1>
    <p class="subtitle">Сможете быстро оформлять заказы, использовать бонусы</p>
    <Form @submit="onSubmit" class="form">
      <label for="tel" class="label">Номер телефона</label>
      <Field name="tel" type="tel" class="field" :rules="validateEmail" v-maska data-maska="+7(###)-###-##-##"
        placeholder="+7" />
      <ErrorMessage name="tel" class="error" />
      <Button text="Войти" />
    </Form>
    <p class="consent">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским
      соглашением</p>
  </div>
  <PhoneConfirmation v-else />
</template>

<style lang="scss" scoped>
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
</style>