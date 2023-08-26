<template>
  <div>
    {{ isModalVisible }}
    <Header />
    <Modal v-if="isModalVisible" />
  </div>
</template>

<script setup>
const { isModalVisible } = useAuth();
</script>

<style lang="scss" scoped></style>