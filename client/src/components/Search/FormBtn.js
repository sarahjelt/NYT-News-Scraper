import React from 'react';

export const FormBtn = props => (
  <button 
    className='btn waves-effect waves-light' 
    type='submit' 
    name='action' {...props}>
      Submit
      <i className='material-icons right'>send</i>
  </button>
)