import React from 'react';

export const FormBtn = props => (
  <button 
    className='btn waves-effect waves-light' 
    {...props}>
      {props.name}
  </button>
)