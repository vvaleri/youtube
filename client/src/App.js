import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Auth } from './components';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';
import { Registration } from './components/Registration/Registration';
import { authUser } from './actions/userAction';

export const App = () => {
  const { isAuth } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      return;
    }
    dispatch(authUser());
  }, []);

  return (
    <BrowserRouter>
      {/* {!isAuth
        && (
          <Switch>
            <Route path="/" exact component={Registration} />
            <Route path="/login" exact component={Auth} />
            <Route path="/search" exact component={Search} />
            <Route path="/favourites" exact component={Favourites} />
          </Switch>
        )} */}
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/login" exact component={Auth} />
        <Route path="/search" exact component={Search} />
        <Route path="/favourites" exact component={Favourites} />
      </Switch>
    </BrowserRouter>
  );
};
