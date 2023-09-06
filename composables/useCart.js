import { useStorage } from '@vueuse/core';

const useCart = () => {
  const currentCart = useStorage('currentCart', []);
  const currentTotal = useStorage('currentTotal', 0);

  const addToCart = (newItem, total) => {
    currentCart.value.push({
      item: newItem,
      total: total,
    });
    console.log(currentCart.value);
    currentTotal.value = 0;
    currentCart.value.map((e) => (currentTotal.value += e.total));
  };

  return {
    currentCart,
    addToCart,
    currentTotal,
  };
};

export default useCart;
