const useTotal = () => {
  const currentTotal = useState('currentTotal', () => 0);

  const setTotalValue = (newVal) => {
    currentTotal.value = newVal;
    console.log(currentOptionValue.value);
  };

  return {
    currentTotal,
    setTotalValue,
  };
};

export default useTotal;
