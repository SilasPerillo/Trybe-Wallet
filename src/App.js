import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route path="/" component={ Home } />
    </Switch>);
}

export default App;
