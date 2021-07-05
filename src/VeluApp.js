import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Nosotros } from './components/Nosotros';
import { Carrito } from './components/Carrito';

export const VeluApp = () => {
  return (
    <BrowserRouter>
     <NavBar />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
        <Route path="/items">    
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoryName">
          <ItemListContainer />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
       <Route path="/nosotros">
         <Nosotros />
       </Route>
       <Route path="/carrito">
         <Carrito />
       </Route>
     </Switch>
     <Footer />
    </BrowserRouter>
  )
}

