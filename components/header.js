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
        <div className='buttonHeaderContainer'>
          <button className='button-no-border'><img width={30} height={30} src='https://res.cloudinary.com/dnfvpjm1r/image/upload/v1687249773/bag_wm7x7s.png' alt='button cart' /></button>
          <button className='button-no-border'>Login</button>
          <button className='button-primary'>Sign Up</button>
        </div>
      </div>
    )
}