import React from 'react';
import { FormBtn } from '../Search/FormBtn.js';
import { Results } from './Results';

export const Article = props =>
  <div className='row' id={result._id} key={result._id}>
    <div className='col s9'>
      <h4>{result.headline.main}</h4>
      {result.pub_date && 
        <p>{(result.pub_date).substr(0, 10)}</p>
      }
      <p><a href={result.web_url}>{result.web_url}</a></p>
    </div>
    <div className='col s3'>
      <FormBtn 
        name='Save' 
        id={result._id}
        onClick={props.saveArticle}
      />
    </div>
  </div>
