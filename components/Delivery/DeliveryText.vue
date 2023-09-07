<template>
  <div class="container">
    <div class="text-section" :class="{ limited: !fullText }">
      <h1>Доставка пиццы в Москве</h1>
      <p class="content">
        Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина
        идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой –
        Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из
        отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для
        вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы
        вкусное и ароматное блюдо не успевало остыть.

        <br><br>
        <strong>Как сделать заказ</strong>
        <br>
        Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще
        заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать
        понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца
        на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
      </p>
      <div class="fade-out-overlay"></div>
    </div>
    <button @click="showMore">{{ getText }}</button>
  </div>
</template>

<script setup>
const fullText = ref(false)

const getText = computed(() => {
  return fullText.value ? "Скрыть текст" : "Показать полностью"
})

const showMore = () => {
  fullText.value = !fullText.value
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
}

button {
  border: none;
  background-color: transparent;
  color: #FF7010;
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;
  cursor: pointer;
  padding: 1rem 0;
}

p,
span {
  font-size: 1rem;
  line-height: 22px;
}

.container {
  padding: 3rem 40rem;
}

.text-section {
  position: relative;
  overflow: hidden;
}

.limited {
  max-height: 150px;
}

.fade-out-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background: linear-gradient(to bottom, transparent, #F9F9F9);
}
</style>