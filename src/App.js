import React from 'react';

import MainPage from './pages/mainpage/mainpage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShoppingPage from './pages/shop/shop.component.jsx';
import Header from './components/header-file/header.component';
import SignningPage from './pages/signIn-signUp/signIn-signUp.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { Switch, Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/shopping' component={ShoppingPage} />
          <Route exact path='/check-out' component={CheckoutPage} />
          <Route
            exact path='/sign-in'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignningPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*componentDidMount() {
    
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
}*/
/*
constructor() {
  super();
  
  this.state = {
    currentUser: null
  }
}*/

/*
const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);*/