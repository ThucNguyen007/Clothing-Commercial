import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { ReactComponent as LogoHeader } from '../../assets/open-shop.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <LogoHeader className='logo-container' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shopping'> SHOP </OptionLink>
      <OptionLink to='/shopping'> CONTACT </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/sign-in'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);

/*
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});*/

/*
const mapStateToProps = ({ user: { currentUser}, cart: { hidden } }) => ({
  currentUser, 
  hidden
})*/

/*const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});*/