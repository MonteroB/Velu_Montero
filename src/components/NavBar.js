import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
          <nav className="navbar"> 
          <ul>    
          <Link className="navbar-brand velu" to="/">        
          <span>Velu</span></Link>      
            <Link className="nav-link texto" to={"/"}>Home</Link>
            <Link className="nav-link texto" to={"/items"}>Tienda</Link>             
            <Link className="nav-link texto" to={"/nosotros"}>Nosotros</Link>
          <div>
          <Link to={"/cart"}><CartWidget /></Link> 
          </div>
          </ul>   
          </nav>
    )
}
