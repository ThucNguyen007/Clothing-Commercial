import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherInputprops }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherInputprops} />
    {label ? (
      <label
        className={`${
          otherInputprops.value.length ? 'shrink' : ''
        } form-input-label`} >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;