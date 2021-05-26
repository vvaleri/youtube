import { useState } from 'react';
import { ChangeModal, DeleteModal } from '../components';
import { FavouriteContainer, Item, Buttons, Btn } from '../styles/favourites';

export function FavouriteItem({ item }) {

  const [ modal, setModal ] = useState(false);
  const [ deleteModal, setDeleteModal ] = useState(false);

  return (
    <FavouriteContainer>
      <Item>
        {item.name}
        <Buttons>
          <Btn onClick={ () => setModal(true) }>редактировать</Btn>
          <Btn onClick={ () => setDeleteModal(true) }>удалить</Btn>
        </Buttons>
      </Item>
      {
        modal && <ChangeModal dataTitle={ item.title } dataName={ item.name } id={ item._id } setModal={ setModal }/>
      }
      {
        deleteModal && <DeleteModal dataTitle={ item.title } dataName={ item.name } id={ item._id } setDeleteModal={ setDeleteModal }/>
      }
    </FavouriteContainer>
 
  )
}