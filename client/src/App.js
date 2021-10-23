import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth } from './components';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/search" exact component={Search} />
      <Route path="/favourites" exact component={Favourites} />
    </Switch>
  </BrowserRouter>
);
