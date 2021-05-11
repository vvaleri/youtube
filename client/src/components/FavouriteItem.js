import { useState, useEffect } from 'react';
import { ChangeModal } from '../components';
import { FavouriteContainer, Item } from '../styles/favourites';

export function FavouriteItem({ item }) {

  const [ modal, setModal ] = useState(false);

  return (
    <FavouriteContainer>
      <Item onClick={ () => setModal(true) }>{item.name}</Item>
      {
        modal && <ChangeModal dataTitle={ item.title } dataName={ item.name } id={ item._id } setModal={ setModal }/>
      }
    </FavouriteContainer>
 
  )
}