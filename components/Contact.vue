<template>
  <div class="contact">
    <Form>
      <h1>О вас</h1>
      <div class="contact__name">
        <Input :required="true" name="name" label="Имя" placeholder="Алексей" />
        <Input :required="true" name="phone" label="Номер телефона" placeholder="+7" />
        <Input label="Почта" name="mail" placeholder="mail@gmail.coms" />
      </div>
      <hr />
      <DeliverySwitch />
      <div class="contact__address">
        <div class="contact__address_top">
          <Input :required="true" name="street" label="Улица" placeholder="Пушкина" />
        </div>
        <div class="contact__address_bottom">
          <Input label="Дом" name="house" placeholder="1а" />
          <Input label="Подъезд" name="entrance" placeholder="Подъезд" />
          <Input label="Этаж" name="floor" placeholder="2" />
          <Input label="Квартира" name="apartment" placeholder="3" />
          <Input label="Домофон" name="intercom" placeholder="0000" />
        </div>


      </div>
      <span class="contact__time">Когда выполнить заказ?</span>
      <ButtonRadio />
      <hr>
      <h2>Оплата</h2>
      <ButtonRadio />
      <hr>
      <h2>Сдача</h2>
      <ButtonRadio />
      <h2>Комментарий</h2>
      <textarea name="" id="" cols="30" rows="10" placeholder="Есть уточнения?"></textarea>
      <hr>
      <div class="contact__footer">
        <span>Итого: 2 379 ₽</span>
        <NuxtLink :to="`/checkout/${generateRandomNumber()}`">
          <Button text="Оформить заказ" />
        </NuxtLink>
      </div>
    </Form>

  </div>
</template>

<script setup lang="ts">
const generateRandomNumber = (): string => {
  const randomNumber = Math.floor(Math.random() * 1000000)
  return String(randomNumber).padStart(6, '0')
}
</script>

<style lang="scss" scoped>
.contact {

  display: flex;
  flex-direction: column;

  &__time {
    color: #A5A5A5;
    font-size: 1rem;
    line-height: 22px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #FF7010;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>