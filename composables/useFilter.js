const useFilter = () => {
  const isFilterMenuVisible = useState('filterMenuVisible', () => false);
  const currentType = useState('currentType', () => '');

  const toggleFilterMenu = (newVal, type = '') => {
    isFilterMenuVisible.value = newVal;
    currentType.value = type;
    console.log(isFilterMenuVisible.value, currentType.value);
  };

  return {
    isFilterMenuVisible,
    toggleFilterMenu,
    currentType,
  };
};

export default useFilter;
