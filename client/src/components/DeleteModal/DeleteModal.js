import axios from 'axios';
import { Modal } from '../UI/Modal/Modal';
import { Text, Buttons, CancelBtn, SaveBtn } from './deleteModalStyles';

export const DeleteModal = ({ id, deleteModal, setDeleteModal, allowScroll }) => {
  const deleteItem = () => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(res => console.log(res.data));
  };

  const closeModal = () => {
    setDeleteModal(false);
    allowScroll();
  };

  return (
    <Modal
      active={deleteModal}
      setActive={setDeleteModal}
      allowScroll={allowScroll}
    >
      <Text>Вы действительно хотите удалить этот запрос?</Text>
      <Buttons>
        <CancelBtn onClick={closeModal}>Отмена</CancelBtn>
        <SaveBtn onClick={deleteItem}>Удалить</SaveBtn>
      </Buttons>
    </Modal>
  );
};
