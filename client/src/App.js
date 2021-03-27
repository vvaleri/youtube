import { Header, IntroSearch } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={ IntroSearch }/>
        <Route/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;