
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/mainpage/mainpage.component';

import ShoppingPage from './pages/shopping/shopping.component.jsx';

import Header from './components/header-file/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import signningPage from './pages/signIn-signUp/signIn-signUp.component';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/shopping' component={ShoppingPage} />
        <Route path='/sign-in' component={signningPage} />
      </Switch>
    </div>
  );
  }
}

export default App;

/*
const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);*/