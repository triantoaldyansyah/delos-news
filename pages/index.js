import React from 'react';
import styles from '../styles/main.css';
import Header from '../components/header';
import Sidebar from '@/components/sidebar';
import CardList from '@/components/cardList';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='container'>
        <Sidebar />
        <CardList />
      </div>
    </main>
  )
}
