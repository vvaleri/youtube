import { useDispatch } from 'react-redux';
import { Modal } from '../UI/Modal/Modal';
import { Text, Buttons, CancelBtn, SaveBtn } from './deleteModalStyles';
import { deleteItems } from '../../actions/favouritesAction';

export const DeleteModal = ({ id, deleteModal, setDeleteModal, allowScroll }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    setDeleteModal(false);
    allowScroll();
  };

  const deleteItemsById = () => {
    dispatch(deleteItems(id));
    closeModal();
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
        <SaveBtn onClick={deleteItemsById}>Удалить</SaveBtn>
      </Buttons>
    </Modal>
  );
};
