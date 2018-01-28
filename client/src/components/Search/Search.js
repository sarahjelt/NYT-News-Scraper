import React from 'react';
import { Input } from './Input.js';
import { FormBtn } from './FormBtn.js';

const defaultState = {
    searchTerms: '',
    startYear: '',
    endYear: ''
}

class Search extends React.Component {

  state = {
    searchTerms: '',
    startYear: '',
    endYear: ''
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    console.log("it work?");
    event.preventDefault();
    alert("it work");
    this.setState(defaultState);
  }

  render() {
    return (
      <form className='col s12'>
        <div className='row'>
          <h2>Search</h2>
          <div className='input-field col s12'>
            <Input 
              value={this.state.searchTerms} 
              onChange={this.handleInputChange}
              name='searchTerms'
              placeholder='What kind of articles are you looking for?' 
              type="text" 
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <Input 
              value={this.state.startYear}
              onChange={this.handleInputChange} 
              name='startYear'
              placeholder='Start Year' 
              type="text" />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <Input 
              value={this.state.endYear} 
              onChange={this.handleInputChange}
              name='endYear' 
              placeholder='End Year' 
              type="text" />
          </div>
        </div>
        <div className='row'>
          <FormBtn 
            onClick={this.handleFormSubmit}
          />
        </div>
      </form>
    )
  }

}

export default Search;