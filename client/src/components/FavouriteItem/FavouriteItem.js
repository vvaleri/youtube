/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { ChangeModal } from '../ChangeModal/ChangeModal';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { FavouriteContainer, Item, Buttons, Btn } from '../Favourites/favouritesStyles';

export function FavouriteItem({ item }) {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <FavouriteContainer>
      <Item>
        {item.name}
        <Buttons>
          <Btn onClick={() => setModal(true)}>редактировать</Btn>
          <Btn onClick={() => setDeleteModal(true)}>удалить</Btn>
        </Buttons>
      </Item>
      {
        modal && (
        <ChangeModal
          dataTitle={item.title}
          dataName={item.name}
          id={item._id}
          setModal={setModal}
        />
        )
      }
      {
        deleteModal && (
        <DeleteModal
          dataTitle={item.title}
          dataName={item.name}
          id={item._id}
          setDeleteModal={setDeleteModal}
        />
        )
      }
    </FavouriteContainer>

  );
}
