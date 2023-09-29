<template>
  <div class="content">
    <h1 class="title">Код из СМС</h1>
    <p class="subtitle">На номер: {{ phoneNumber }}</p>
    <Form @submit="onSubmit" class="form">
      <VerificationCode />
      <ErrorMessage name="tel" class="error" />
      <Button text="Войти" />
    </Form>
    <span v-if="timer > 0">Отправить код ещё раз через: {{ timer }} секунд.</span>
    <span v-else>Отправить код ещё раз через: <button class="send" @click="resendSMS">Отправить</button></span>
  </div>
</template>

<script setup lang="ts">
const timer = ref<number>(0)
const { phoneNumber } = usePhoneNumber()
// const verifyCode = new Array(4)

const interval = setInterval((): void => {
  if (timer.value !== 0) {
    timer.value--
  }
}, 1000)

const resendSMS = (): void => {
  timer.value = 10
}

const onSubmit = (): void => {

}
</script>

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

.send {
  cursor: pointer;
  color: #FF7010;
  border: none;
  background-color: transparent;
  font-size: 1rem;
}
</style>