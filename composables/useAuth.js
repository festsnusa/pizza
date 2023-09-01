const useAuth = () => {
  const isModalVisible = useState('modalVisible', () => false);

  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;

    if (isModalVisible.value) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return {
    isModalVisible,
    toggleModal,
  };
};

export default useAuth;
