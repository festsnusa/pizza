<template>
  <div>
    {{ isModalVisible }}
    <Header />
    <Auth v-if="isModalVisible" />
  </div>
</template>

<script setup>
const { isModalVisible } = useAuth();
</script>

<style lang="scss" scoped></style>