import React from 'react';
import styles from '../styles/main.css';
import SearchBar from './searchBar';

export default function Header() {
    return (
      <div className="headerContainer">
        <div>
          <h2 className="siteTitle">Delos News</h2>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <h2 className='siteTitle'>This is cart button</h2>
        </div>
      </div>
    )
}