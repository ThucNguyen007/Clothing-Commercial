import React from 'react';

import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import StripeFeatureButton from '../../components/stripe-feature/stripe-feature.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span> Product </span>
      </div>
      <div className='header-block'>
        <span> Description </span>
      </div>
      <div className='header-block'>
        <span> Quantity </span>
      </div>
      <div className='header-block'>
        <span> Price </span>
      </div>
      <div className='header-block'>
        <span> Remove </span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItems key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'> TOTAL: ${total} </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeFeatureButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);