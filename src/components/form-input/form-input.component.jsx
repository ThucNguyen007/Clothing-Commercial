import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherInputprops }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherInputprops} />
    {label ? (
      <FormInputLabel className={otherInputprops.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;