import React from 'react';
import { Results } from './Results.js';
import { Search } from '../Search/Search.js';
import API from "../../utils/API";

const defaultState = {
    searchTerms: '',
    startYear: '',
    endYear: '',
    results: [],
    button: 'Save'
  }

export class ResultsContainer extends React.Component {

  state = defaultState;

  searchAPI = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.response.docs });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if ((this.state.startYear).length === 0 && (this.state.endYear).length === 0) {
      this.searchAPI(this.state.searchTerms);
    } 
    else if ((this.state.startYear).length === 4 && (this.state.endYear).length !== 4) {
      this.searchAPI(`${this.state.searchTerms}&begin_date=${this.state.startYear}0101`);
    } 
    else if ((this.state.startYear).length !== 4 && (this.state.endYear).length === 4) {
      this.searchAPI(`${this.state.searchTerms}&end_date=${this.state.endYear}1231`);
    } 
    else if ((this.state.startYear).length === 4 && (this.state.endYear).length === 4) {
      this.searchAPI(`${this.state.searchTerms}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`);
    }
  }

  saveArticle = data => {
    // this.setState({ button: "Saved!"});

    API.saveArticle(data)
      .then(console.log('ok???'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Search 
          search={this.state.searchTerms} 
          handleFormSubmit={this.handleFormSubmit} 
          handleInputChange={this.handleInputChange}
        />
        <Results 
          results={this.state.results} 
          saveArticle={this.saveArticle} 
          butto={this.state.button}
        />
      </div>
    )
  }
}