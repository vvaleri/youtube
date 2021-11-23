import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, FavouriteItem } from '..';
import { Main, FavouriteTitle, Text, Head } from './favouritesStyles';
import { getItems } from '../../actions/favouritesAction';
import { ErrorTooltip } from '../UI/ErrorTooltip/ErrorTooltip';

export const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites, errorItems, errortext } = useSelector(state => state.favouritesReducer);
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
        <Head>
          <FavouriteTitle>Избранное</FavouriteTitle>
          {errorItems && <ErrorTooltip favourites>{errortext}</ErrorTooltip>}
        </Head>
        {
          favourites.length > 0
            ? favourites.map(item => <FavouriteItem key={`${item._id}${item.name}`} item={item} />)
            : <Text>У вас пока нет сохранённых запросов</Text>
        }
      </Main>
    </>
  );
};
