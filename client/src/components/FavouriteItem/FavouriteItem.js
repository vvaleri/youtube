/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import axios from 'axios';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { FavouriteContainer, Item, Buttons, Btn } from './favouriteItemStyles';
import { ItemModal } from '../ItemModal/ItemModal';
import useScrollBlock from '../../hooks/useScrollBlock';

export function FavouriteItem({ item }) {
  const [deleteModal, setDeleteModal] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [title, setTitleValue] = useState(item.title);
  const [name, setNameValue] = useState(item.name);

  const postItem = valueText => {
    axios.put(`http://localhost:5000/items/update/${item._id}`, valueText)
      .then(res => console.log(res.data));
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
      <ItemModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        allowScroll={allowScroll}
        postItem={postItem}
      />
      <DeleteModal
        id={item._id}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        allowScroll={allowScroll}
      />
    </FavouriteContainer>

  );
}
