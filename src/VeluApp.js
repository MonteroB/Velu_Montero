import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

export const VeluApp = () => {
  return (
    <div>
     <NavBar />
     <ItemListContainer/>
    </div>
  )
}

