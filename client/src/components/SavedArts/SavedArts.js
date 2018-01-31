import React from 'react';
import API from '../../utils/API.js';
import { FormBtn } from '../Search/FormBtn';

export class SavedArts extends React.Component {
  state = {
    saved: [],
    headline: '',
    date: '',
    url: ''
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({saved: res.data, headline: "", date: "", url: ""})
        )
        .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return(
      <div className="row">
        <h2>Saved Articles</h2>
        <div className='row'>
          {this.state.saved.map(result =>
            <div className='row' id={result._id} key={result._id}>
              <div className='col s9'>
                <h4>{result.headline}</h4>
                {result.date && 
                  <p>{(result.date).substr(0, 10)}</p>
                }
                <p><a href={result.url}>{result.url}</a></p>
              </div>
              <div className='col s3'>
                <FormBtn 
                  name='Unsave' 
                  id={result._id}
                  onClick={(id) => this.deleteArticle(result._id)}
                />
              </div>
            </div>
          )}
      </div>
          </div>
    )
  }
} 

