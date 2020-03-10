import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import MainPage from './pages/mainpage/mainpage.component';

import ShoppingPage from './pages/shopping/shopping.component.jsx';

import Header from './components/header-file/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import SignningPage from './pages/signIn-signUp/signIn-signUp.component';

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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);

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