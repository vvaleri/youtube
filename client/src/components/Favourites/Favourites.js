import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, FavouriteItem } from '..';
import { Main, FavouriteTitle } from './favouritesStyles';

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    let cleanupFunction = true;

    axios.get('http://localhost:5000/items')
      .then(res => {
        if (cleanupFunction) setFavourites(res.data);
      });
    return () => { cleanupFunction = false; };
  });

  return (
    <>
      <Header />
      <Main>
        <FavouriteTitle>Избранное</FavouriteTitle>
        {
          favourites.map(item => <FavouriteItem key={item._id} item={item} />)
        }
      </Main>
    </>
  );
};
