<template>
  <div class="promocode">
    <form class="promocode__form" @submit.prevent="onSubmit">
      <input name="promocode" class="promocode__input" type="text" placeholder="Промокод" />
      <Button class="promocode__button">
        <img src="@/assets/images/send.svg" alt="send">
      </Button>
    </form>
    <span class="promocode__total">Итого: {{ currentTotal }} ₽</span>
  </div>
</template>

<script setup lang="ts">
const onSubmit = () => {
}

const props = defineProps({
  total: {
    type: Number,
    default: () => 0,
  }
})

const currentTotal = ref<number>(props.total)
</script>

<style lang="scss" scoped>
.promocode {

  display: flex;
  justify-content: space-between;

  &__form {
    position: relative;
    display: inline-block;
  }

  &__input {
    padding: 1rem;
    border: 1px solid #F0F0F0;
    border-radius: 6px;
    padding-right: 30px;
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  &__total {
    color: #FF7010;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>