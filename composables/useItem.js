const useItem = () => {
  const isItemVisible = useState('isItemVisible', () => false);

  const toggleItem = () => {
    isItemVisible.value = !isItemVisible.value;
  };

  return {
    isItemVisible,
    toggleItem,
  };
};

export default useItem;
