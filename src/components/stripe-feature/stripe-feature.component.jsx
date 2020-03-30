import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeFeatureButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xXLCTshes83fkjzlDWSez8D200ct4XR17R';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
    
    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeFeatureButton;