
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/mainpage/mainpage.component';

import ShoppingPage from './pages/shopping/shopping.component.jsx';

import Header from './components/header-file/header.component';

import signningPage from './pages/signIn-signUp/signIn-signUp.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/shopping' component={ShoppingPage} />
        <Route path='/sign-in' component={signningPage} />
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