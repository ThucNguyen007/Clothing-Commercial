import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherButtonprops }) => (
  <CustomButtonContainer {...otherButtonprops}> {children} </CustomButtonContainer>
);

export default CustomButton;

/*
const CustomButton = ({ 
  children, 
  isGoogleSignIn,
  inverted,
  ...otherButtonProps }) => (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherButtonProps} >
      {children}
    </button>
);*/