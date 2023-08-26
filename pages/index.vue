<template>
  <div>
    <!-- <Header /> -->
    <!-- <Modal v-if="isModalVisible" /> -->
    <Footer />
  </div>
</template>

<script setup>
const { isModalVisible } = useAuth();
</script>

<style lang="scss" scoped></style>