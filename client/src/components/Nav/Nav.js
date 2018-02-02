import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => (
  <nav>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>NYT Scrubber</Link>
      <ul id='nav-mobile' className='right hide-on-small-only'>
        <li><Link to='/saved'>Saved</Link></li>
      </ul>
    </div>
  </nav>
)