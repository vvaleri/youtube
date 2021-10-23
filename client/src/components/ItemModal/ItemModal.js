import { useState } from 'react';
import { Modal } from '../UI/Modal/Modal';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { ModalTitle, ModalBox, Label, ModalButtons } from './itemModalStyles';

export const ItemModal = ({ modalActive, setModalActive, allowScroll, postItem }) => {
  const [title, setTitleValue] = useState('');
  const [name, setNameValue] = useState('');
  const [textButton, setTextButton] = useState({ save: 'Сохранить', cancel: 'Не сохранять' });

  const saveItem = () => {
    const valueText = {
      title,
      name
    };
    postItem(valueText);
  };

  return (
    <Modal
      active={modalActive}
      setActive={setModalActive}
      allowScroll={allowScroll}
    >
      <ModalTitle>Сохранить запрос</ModalTitle>
      <ModalBox>
        <Label htmlFor="title">
          <span>*</span>
          {' '}
          Запрос
        </Label>
        <Input value={title} onChange={e => setTitleValue(e.target.value)} id="title" />
      </ModalBox>
      <ModalBox>
        <Label htmlFor="name">
          <span>*</span>
          {' '}
          Название
        </Label>
        <Input value={name} onChange={e => setNameValue(e.target.value)} id="name" placeholder="Укажите название" />
      </ModalBox>
      <ModalButtons>
        <Button white onClick={() => setModalActive(false)}>{textButton.cancel}</Button>
        <Button onClick={saveItem}>{textButton.save}</Button>
      </ModalButtons>
    </Modal>
  );
};
