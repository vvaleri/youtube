import { useState } from 'react';
import { ChangeModal } from '../components';
import { FavouriteContainer, Item, Buttons, Btn } from '../styles/favourites';

export function FavouriteItem({ item }) {

  const [ modal, setModal ] = useState(false);

  return (
    <FavouriteContainer>
      <Item>
        {item.name}
        <Buttons>
          <Btn onClick={ () => setModal(true) }>редактировать</Btn>
          <Btn>удалить</Btn>
        </Buttons>
      </Item>
      {
        modal && <ChangeModal dataTitle={ item.title } dataName={ item.name } id={ item._id } setModal={ setModal }/>
      }
    </FavouriteContainer>
 
  )
}