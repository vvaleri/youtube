import { Header } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Header>
          <Route path='/'/>
          <Route/>
        </Header>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;