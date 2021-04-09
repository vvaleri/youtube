import { Header, Search, Favourites } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={ Search }/>
        <Route path='/favourites' exact component={ Favourites }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;