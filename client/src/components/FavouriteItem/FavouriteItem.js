import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { FavouriteContainer, Item, Buttons, Btn, ModalTitle, Label, ModalButtons } from './favouriteItemStyles';
import { Modal } from '../UI/Modal/Modal';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import useScrollBlock from '../../hooks/useScrollBlock';
import { updateItem } from '../../actions/favouritesAction';

export const FavouriteItem = ({ item }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [title, setTitleValue] = useState(item.title);
  const [name, setNameValue] = useState(item.name);

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const postItem = () => {
    const valueText = {
      id: item._id,
      title,
      name,
      userEmail: user.email
    };

    dispatch(updateItem(valueText));
    setDeleteModal(false);
    allowScroll();
  };

  const openModal = () => {
    setModalActive(true);
    blockScroll();
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
    blockScroll();
  };

  return (
    <FavouriteContainer>
      <Item>
        {item.name}
        <Buttons>
          <Btn onClick={openModal}>редактировать</Btn>
          <Btn onClick={openDeleteModal}>удалить</Btn>
        </Buttons>
      </Item>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        allowScroll={allowScroll}
      >
        <ModalTitle>Сохранить запрос</ModalTitle>
        <Label>
          <span>Запрос</span>
          <Input value={title} onChange={e => setTitleValue(e.target.value)} />
        </Label>
        <Label>
          <span>Название</span>
          <Input value={name} onChange={e => setNameValue(e.target.value)} placeholder="Укажите название" />
        </Label>
        <ModalButtons>
          <Button white onClick={() => setModalActive(false)}>Отмена</Button>
          <Button onClick={postItem}>Изменить</Button>
        </ModalButtons>
      </Modal>
      <DeleteModal
        id={item._id}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        allowScroll={allowScroll}
      />
    </FavouriteContainer>

  );
};
