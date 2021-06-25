import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';


export const VeluApp = () => {
  const greating ="Próximos lanzamientos...";
  return (
    <div>
     <NavBar />
     <ItemListContainer greating={greating}/>
    </div>
  )
}

