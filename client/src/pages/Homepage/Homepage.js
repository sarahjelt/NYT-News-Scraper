import React from 'react';
import Search from '../../components/Search/Search.js';
import { Results } from '../../components/Results/Results.js';

export const Homepage = () => (
  <div className='container'>
    <Search />
    <Results />
  </div>
)