const usePhoneNumber = () => {
  const phoneNumber = useState('phoneNumber', () => '');

  const setPhoneNumber = (newVal) => {
    phoneNumber.value = newVal;
    console.log(phoneNumber.value);
  };

  return {
    phoneNumber,
    setPhoneNumber,
  };
};

export default usePhoneNumber;
