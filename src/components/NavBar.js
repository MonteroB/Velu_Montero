import React from 'react';
import { CartWidget } from './CartWidget';
import { Link} from 'react-router-dom';

export const NavBar = () => {
    return (
          <nav className="navbar"> 
          <ul>    
          <Link className="navbar-brand velu" to="/">        
          <span>Velu</span></Link>      
            <Link className="nav-link texto" to={"/"}>Home</Link>
            <Link className="nav-link texto" to={"/items"}>Tienda</Link>                  
            <Link className="nav-link texto" to={"/nosotros"}>Nosotros</Link>
          <CartWidget />
          </ul>   
          </nav>
    )
}
