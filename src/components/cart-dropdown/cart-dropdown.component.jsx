import React from 'react';

import CustomButton from '../button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
/*
const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);*/