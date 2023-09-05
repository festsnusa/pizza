const useItem = () => {
  const isItemVisible = useState('isItemVisible', () => false);

  const toggleItem = (newVal) => {
    isItemVisible.value = newVal;
  };

  return {
    isItemVisible,
    toggleItem,
  };
};

export default useItem;
