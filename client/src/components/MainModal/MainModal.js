import { ModalTitle, Label, ModalButtons } from './mainModalStyles';
import { Modal } from '../UI/Modal/Modal';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

export const MainModal = ({ modalActive,
  setModalActive,
  allowScroll,
  postItem,
  inputForm,
  setInputForm,
  closeModal,
  textBtn }) => (

    <Modal
      active={modalActive}
      setActive={setModalActive}
      allowScroll={allowScroll}
    >
      <ModalTitle>Сохранить запрос</ModalTitle>
      <Label>
        <span>Запрос</span>
        <Input
          value={inputForm.title}
          onChange={e => setInputForm({ ...inputForm, title: e.target.value })}
        />
      </Label>
      <Label>
        <span>Название</span>
        <Input
          value={inputForm.name}
          onChange={e => setInputForm({ ...inputForm, name: e.target.value })}
          placeholder="Укажите название"
        />
      </Label>
      <ModalButtons>
        <Button white onClick={closeModal}>Отмена</Button>
        <Button onClick={postItem}>{textBtn}</Button>
      </ModalButtons>
    </Modal>

);
