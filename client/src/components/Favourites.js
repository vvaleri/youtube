import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../components';
import { Main, FavouriteTitle, FavouriteContainer, FavouriteItem } from '../styles/favourites';

export function Favourites() {

  const [ favourites, setFavourites ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
    .then(res => setFavourites(res.data))
  })

  return(
    <>
      <Header/>
      <Main>
        <FavouriteTitle>Избранное</FavouriteTitle>
        <FavouriteContainer>
          {
            favourites.map(item => <FavouriteItem>{item.name}</FavouriteItem>)
          }
        </FavouriteContainer>
      </Main>
    </>
  )
}