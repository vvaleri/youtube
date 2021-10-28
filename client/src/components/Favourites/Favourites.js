import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, FavouriteItem } from '..';
import { Main, FavouriteTitle } from './favouritesStyles';
import { getItems } from '../../actions/favouritesAction';

export const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector(state => state.favouritesReducer);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

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
