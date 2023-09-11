import json from '../assets/data.json';

const useData = () => {
  const pizzaData = useState('pizzaData', () =>
    json.filter((e) => e.type == 'pizza')
  );

  const sushiData = useState('sushiData', () =>
    json.filter((e) => e.type == 'sushi')
  );

  const setCurrentData = (type, arr) => {
    // new
    filterData('new', type, arr);

    console.log(pizzaData.value);

    // hit
  };

  const filterData = (filterOption, type, arr) => {
    const foundObj = arr.value.find(
      (e) => e.title == 'new' || e.title == 'hit'
    );

    if (foundObj !== undefined) {
      if (type.value === 'pizza') {
        pizzaData.value = pizzaData.value.filter(
          (e) => e.status == 'new' || e.status == 'hit'
        );
      } else {
        sushiData.value = sushiData.value.filter(
          (e) => e.status == 'new' || e.status == 'hit'
        );
      }
    }
  };

  return {
    pizzaData,
    sushiData,
    setCurrentData,
  };
};

export default useData;
