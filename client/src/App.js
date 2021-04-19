import { Search, Favourites, Auth } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ Auth }/>
        <Route path='/search' exact component={ Search }/>
        <Route path='/favourites' exact component={ Favourites }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;