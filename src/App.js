
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import MainPage from './pages/mainpage/mainpage.component';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;