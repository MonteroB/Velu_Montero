import React from 'react';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-color bg-light">
             <a className="navbar-brand velu" href="/">Velu</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <a className="nav-link texto" href="/"><Link to={"/"}>Home</Link><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
           <a className="nav-link texto" href="/"><Link to={"/tienda"}>Tienda</Link><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
           <a className="nav-link texto" href="/"><Link to={"/nosotros"}>Nosotros</Link></a>
          </li>
         <li className="nav-item">
          <a className="nav-link disabled texto" href="/" tabIndex="-1" aria-disabled="true">Aromas</a>
         </li>
        </ul>
    <CartWidget />
  </div>
</nav> 
        </div>
    )
}
