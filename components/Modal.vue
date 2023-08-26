<template>
  <div class="container">
    <Auth v-if="!isPhoneFilled" :togglePhoneFilled="togglePhoneFilled" />
    <PhoneConfirmation v-else />
    <img class="close" src="_nuxt/assets/images/icon-close.png" alt="close" @click="toggleModal">
  </div>
</template>

<script setup>
const isPhoneFilled = ref(false)

const { toggleModal } = useAuth();

const togglePhoneFilled = () => {
  isPhoneFilled.value = true
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: baseline;
}

.close {
  cursor: pointer;
}
</style>