
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import MainPage from './pages/mainpage/mainpage.component';

import ShoppingPage from './pages/shopping/shopping.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/shopping' component={ShoppingPage} />
      </Switch>
    </div>
  );
}

export default App;

/*
const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);*/