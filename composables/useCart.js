import { useStorage } from '@vueuse/core';

const useCart = () => {
  const currentCart = useStorage('currentCart', []);
  const currentTotal = useStorage('currentTotal', 0);
  const isCartSidebarVisible = useState('isCartSidebarVisible', () => false);
  const { togglePopup } = usePopup();

  const addToCart = (newItem, total) => {
    currentCart.value.push({
      item: newItem,
      total: total,
    });
    console.log(currentCart.value);
    currentTotal.value = 0;
    currentCart.value.map((e) => (currentTotal.value += e.total));

    togglePopup(true);
    setTimeout(() => togglePopup(false), 2000);
  };

  const toggleCartSidebar = (newVal) => {
    isCartSidebarVisible.value = newVal;
    console.log(isCartSidebarVisible.value);
  };

  const deleteItem = (index) => {
    console.log(currentCart.value);
    currentCart.value = currentCart.value.splice(index, 1);
  };

  return {
    currentCart,
    addToCart,
    currentTotal,
    isCartSidebarVisible,
    toggleCartSidebar,
    deleteItem,
  };
};

export default useCart;
