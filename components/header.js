import React, { useState, useEffect } from 'react';
import styles from '../styles/main.css';
import SearchBar from './searchBar';
import MiniCart from './miniCart';

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
          <MiniCart />
        </div>
        
      </div>
    )
}