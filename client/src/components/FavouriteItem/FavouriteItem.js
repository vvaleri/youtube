import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { FavouriteContainer, Item, Buttons, Btn } from './favouriteItemStyles';
import useScrollBlock from '../../hooks/useScrollBlock';
import { updateItem } from '../../actions/favouritesAction';
import { MainModal } from '../MainModal/MainModal';

export const FavouriteItem = ({ item }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [inputForm, setInputForm] = useState({ title: item.title, name: item.name });

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const postItem = () => {
    const valueText = {
      id: item._id,
      title: inputForm.title,
      name: inputForm.name,
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
      <MainModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        allowScroll={allowScroll}
        postItem={postItem}
        inputForm={inputForm}
        setInputForm={setInputForm}
        textBtn="Изменить"
      />
      <DeleteModal
        id={item._id}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        allowScroll={allowScroll}
      />
    </FavouriteContainer>

  );
};
