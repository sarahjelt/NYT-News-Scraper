import React from 'react';
import { Input } from './Input.js';
import { FormBtn } from './FormBtn.js';

export const Search = props => (
  <form className='col s12'>
    <div className='row'>
      <h2>Search</h2>
      <div className='input-field col s12'>
        <Input 
          value={props.searchTerms} 
          onChange={props.handleInputChange}
          name='searchTerms'
          placeholder='What kind of articles are you looking for?' 
          type="text" 
        />
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s12'>
        <Input 
          value={props.startYear}
          onChange={props.handleInputChange} 
          name='startYear'
          placeholder='Start Year' 
          type="text" 
          maxLength="4" />
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s12'>
        <Input 
          value={props.endYear} 
          onChange={props.handleInputChange}
          name='endYear' 
          placeholder='End Year' 
          type="text" 
          maxLength="4" />
      </div>
    </div>
    <div className='row'>
      <FormBtn 
        type='submit'
        name='Search' 
        onClick={props.handleFormSubmit}
      />
    </div>
  </form>
)