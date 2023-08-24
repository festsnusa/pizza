const useAuth = () => {
  const isModalVisible = useState('modalVisible', () => false);

  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
  };

  return {
    isModalVisible,
    toggleModal,
  };
};

export default useAuth;
