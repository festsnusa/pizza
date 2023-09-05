const useCart = () => {
  const currentCart = useState('useCart', () => []);

  const addToCart = (newItem, total) => {
    currentCart.value.push({
      item: newItem,
      total: total,
    });
    console.log(currentCart.value);
  };

  return {
    currentCart,
    addToCart,
  };
};

export default useCart;
