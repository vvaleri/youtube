import { Header, Search } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={ Search }/>
        <Route/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;