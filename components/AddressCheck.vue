<template>
  <div class="container" id="address">
    <Form @submit="onSubmit" class="address">
      <label for="address">Проверить адрес доставки</label>
      <Field name="address" class="address__input" type="text" placeholder="Адрес" :rules="validateAddress" />
      <!-- <ErrorMessage name="address" class="error" /> -->
      <Button class="address__button" text="Проверить" />
    </Form>


  </div>
</template>

<script setup>
const validateAddress = value => {
  if (!value) {
    return "Заполните адрес"
  }

  return true
}

const onSubmit = () => {

}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 5rem;
}

.address {
  display: grid;
  grid-template-columns: 0.5fr 5fr 0.5fr;
  grid-auto-flow: column;
  gap: 1.5rem;

  &__input {
    padding: 1rem;
    padding-left: 2.5rem;
    background: url('../assets/images/location.svg') no-repeat 1rem center;
    background-size: 20px 20px;
    grid-column: 2 / 3;
    border: 1px solid #F0F0F0;
    border-radius: 1rem;
  }

  &__button {
    grid-column: 3 / 4;
  }

  label {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    grid-column: 1 / 2;
    align-self: center;
  }


}
</style>