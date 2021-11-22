import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Auth } from './components';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';
import { Registration } from './components/Registration/Registration';
import { authUser } from './actions/userAction';
import { PrivateRoute } from './hoc/PrivateRoute';
import { PublicRoute } from './hoc/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      return;
    }
    dispatch(authUser());
  }, []);

  return (
    <>
      <Switch>
        <PublicRoute path="/" exact component={Registration} />
        <PublicRoute path="/login" exact component={Auth} />
        <PrivateRoute path="/search" exact component={Search} />
        <PrivateRoute path="/favourites" exact component={Favourites} />
      </Switch>
    </>
  );
};
