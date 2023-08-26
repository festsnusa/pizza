<template>
  <div class="content">
    <h1 class="title">Код из СМС</h1>
    <p class="subtitle">На номер: {{ phoneNumber }}</p>
    <Form @submit="onSubmit" class="form">
      <input maxlength="1" autocorrect="off" autocomplete="off" autocapitalize="off" spellcheck="false" type="tel"
        class="form-control" v-model="verifyCode[n - 1]" @focus="setSelected" @input.stop="inputEvent"
        @keydown.stop="downEvent" @keypress.stop="pressEvent" @paste="pasteEvent(n - 1, $event)">
      <ErrorMessage name="tel" class="error" />
      <Button text="Войти" />
    </Form>
    <span v-if="timer > 0">Отправить код ещё раз через: {{ timer }} секунд.</span>
    <span v-else>Отправить код ещё раз через: <button class="send" @click="resendSMS">Отправить</button></span>
  </div>
</template>

<script setup>
const timer = ref(0)
const { phoneNumber } = usePhoneNumber()
const verifyCode = new Array(4)

const interval = setInterval(() => {
  if (timer.value !== 0) {
    timer.value--
  }
}, 1000)

const resendSMS = () => {
  timer.value = 10
}

const setSelected = (event) => {
  event.target.select()
}

const inputEvent = (event) => {

  let value = event.target.value
  if (value.length > 1) {
    event.target.value = value.substr(0, 1)
  }
  getVerifyCode().value.length === verifyCode.value.length
    ? (this.blurOnComplete ? event.target.blur() : this.nextElement(event))
    : event.target.value && this.nextElement(event)
}

const getVerifyCode = () => {
  return verifyCode.value.join('')
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