import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, FavouriteItem } from '..';
import { Main, FavouriteTitle, Text } from './favouritesStyles';
import { getItems } from '../../actions/favouritesAction';

export const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector(state => state.favouritesReducer);
  const { user, isAuth } = useSelector(state => state.userReducer);

  useEffect(() => {
    if (isAuth) {
      dispatch(getItems(user.email));
    }
  }, [isAuth]);

  return (
    <>
      <Header />
      <Main>
        <FavouriteTitle>Избранное</FavouriteTitle>
        {
          favourites.length > 0
            ? favourites.map(item => <FavouriteItem key={item._id || item.id} item={item} />)
            : <Text>У вас пока нет сохранённых запросов</Text>
        }
      </Main>
    </>
  );
};
