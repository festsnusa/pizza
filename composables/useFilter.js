const useFilter = () => {
  const isFilterMenuVisible = useState('filterMenuVisible', () => false);

  const toggleFilterMenu = (newVal) => {
    isFilterMenuVisible.value = newVal;
    console.log(isFilterMenuVisible.value);
  };

  return {
    isFilterMenuVisible,
    toggleFilterMenu,
  };
};

export default useFilter;
