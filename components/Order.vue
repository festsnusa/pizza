<template>
  <div class="container">
    <div class="top">
      <div class="rectangle"></div>
      <div class="description">
        <div class="order">
          <label for="order">Заказ</label>
          <span name="order">№{{ order }} <span class="date">{{ date }}</span></span>
        </div>
        <div class="total">
          <label for="total">Сумма заказа</label>
          <span name="total">{{ total }} ₽</span>
        </div>
        <div class="status">
          <label for="status">Статус</label>
          <span name="status">{{ status }}</span>
        </div>
        <div class="payment-type">
          <label for="payment">Оплачено</label>
          <span name="payment">{{ paymentType }}</span>
        </div>
        <div class="address" rowspan="3">
          <label for="payment">Адрес</label>
          <span name="payment">{{ address }}</span>
        </div>
      </div>
    </div>


    <div class="pizzas">
      <img :src="`@/assets/images/order/pizza-${i}.png`" :alt="`pizza-${i}`" v-for="i in 3">
    </div>
    <button>
      Повторить заказ
    </button>
  </div>
</template>

<script setup lang="ts">
const order = ref('130312')
const total = ref(0)
const date = ref(new Date().toLocaleDateString())
const status = ref('Обрабатывается')
const paymentType = ref('Картой')
const address = ref('ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#')
</script>

<style lang="scss" scoped>
label {
  color: #A5A5A5;
}

button {
  cursor: pointer;
  padding: 1rem;
  color: #FF7010;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
}

.order {
  .date {
    color: #A5A5A5;
  }
}

.container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.top {
  display: flex;
  align-items: stretch;
  padding: 1rem 0;
}

.rectangle {
  flex: 0 0 auto;
  width: 5px;
  background-color: #FF7010;
  border-radius: 20px;
  margin-right: 10px;
}

.order,
.total,
.status,
.payment-type,
.address {
  display: flex;
  flex-direction: column;
}

.description {
  display: grid;
  grid-template-areas:
    "order . total"
    "status . payment-type"
    "address address address";
  grid-gap: 10px;
}

.order {
  grid-area: order;
}

.total {
  grid-area: total;
}

.status {
  grid-area: status;
}

.payment-type {
  grid-area: payment-type;
}

.address {
  grid-area: address;
}

.pizzas {
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  padding: 1.5rem 0;

  img:nth-child(2) {
    margin-left: -10px;
  }

  img:nth-child(3) {
    margin-left: -10px;
  }
}
</style>