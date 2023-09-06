<template>
  <Overlay v-if="isFilterMenuVisible || isModalVisible || isItemVisible || isCartSidebarVisible" />
  <Header>
    <Navigation />
  </Header>
  <Popup text="Товар добавлен в корзину" v-show="isPopupVisible" />
  <main>
    <Modal v-if="isModalVisible" />
    <Filter v-if="isFilterMenuVisible" />
    <CartSidebar v-show="isCartSidebarVisible" :key="currentCart" />
    <Categories />
    <Promos />
    <AddressCheck />
    <Menu title="Пицца" type="pizza" :isFilter="true" id="pizza" />
    <Menu title="Суши" type="sushi" :isFilter="true" id="sushi" />
    <Menu title="Закуски" type="snacks" id="snacks" />
    <Menu title="Десерты" type="dessert" id="desserts" />
    <Menu title="Напитки" type="drinks" id="drinks" />
    <Menu title="Соусы" type="sauces" id="sauces" />
    <Menu title="Комбо" type="combo" id="combo" />
    <DeliveryText />
  </main>
  <Footer />
</template>

<script setup>
const { isModalVisible } = useAuth();
const { isFilterMenuVisible } = useFilter()
const { isItemVisible } = useItem()
const { isPopupVisible } = usePopup()
const { isCartSidebarVisible, currentCart } = useCart()
</script>

<style lang="scss" scoped>
main {
  background-color: #F9F9F9;
}
</style>