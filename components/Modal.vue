<template>
  <div class="container">
    <Auth v-if="!isPhoneFilled" :togglePhoneFilled="togglePhoneFilled" />
    <PhoneConfirmation v-else />
    <img class="close" src="@/assets/images/icon-close.png" alt="close" @click="toggleModal">
  </div>
</template>

<script setup lang="ts">
const isPhoneFilled = ref(false)

const { toggleModal } = useAuth();

const togglePhoneFilled = () => {
  isPhoneFilled.value = true
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  z-index: 15;
}

.close {
  cursor: pointer;
}
</style>