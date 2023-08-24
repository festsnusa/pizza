<template>
  <div>
    <Header />
    <Auth v-show="isModalVisible" />
  </div>
</template>

<script setup>
const { isModalVisible } = useAuth();
</script>

<style lang="scss" scoped></style>