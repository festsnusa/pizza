const useSelect = () => {
  const options = [
    { title: 'Как можно скорее', value: 'asap' },
    { title: 'По времени', value: 'on-time' },
  ];

  const currentOptionValue = useState('currentValue', () => options[0].value);

  const setOptionValue = (newVal) => {
    currentOptionValue.value = newVal;
    console.log(currentOptionValue.value);
  };

  return {
    currentValue,
    setOptionsValue,
  };
};

export default useSelect;
