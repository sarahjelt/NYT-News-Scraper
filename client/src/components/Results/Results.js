import React from 'react';
import { FormBtn } from '../Search/FormBtn.js';
// import { Article } from './Article';

export const Results = props =>
  <div className='row'>
    {props.results.length > 0 &&
      <h3>Results</h3> 
    }
      {props.results.map(result =>
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
              name={props.butto === "Save" ? "Save" : "Saved!"} 
              id={result._id}
              onClick={(data) => props.saveArticle({ headline: result.headline.main, 
                date: result.pub_date, 
                url: result.web_url}).then(setState({button: "Saved!"}))}
            />
          </div>
        </div>
      )}
  </div>
