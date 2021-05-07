import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header, ChangeModal } from '../components';
import { Main, FavouriteTitle, FavouriteContainer, FavouriteItem } from '../styles/favourites';

export function Favourites() {

  const [ favourites, setFavourites ] = useState([]);
  const [ modal, setModal ] = useState(false);

  useEffect(() => {
    let cleanupFunction = true;

    axios.get('http://localhost:5000/items')
    .then(res => {
      if(cleanupFunction) setFavourites(res.data)
    })
    return () => { cleanupFunction = false};
  })

  return(
    <>
      <Header/>
      <Main>
        <FavouriteTitle>Избранное</FavouriteTitle>
        <FavouriteContainer>
          {
            favourites.map(item => <FavouriteItem key={ item._id } onClick={ () => setModal(true) }>{item.name}</FavouriteItem>)
          }
        </FavouriteContainer>
        {
        modal && <ChangeModal setModal={ setModal }/>
        }
      </Main>
    </>
  )
}