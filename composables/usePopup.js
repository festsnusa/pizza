const usePopup = () => {
  const isPopupVisible = useState('isPopupVisible', () => false);

  const togglePopup = (newVal) => {
    isPopupVisible.value = newVal;
  };

  return {
    isPopupVisible,
    togglePopup,
  };
};

export default usePopup;
