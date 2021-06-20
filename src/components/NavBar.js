import React from 'react';
import { CartWidget } from './CartWidget';

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
           <a className="nav-link texto" href="/">Tienda <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
           <a className="nav-link texto" href="/">Nosotros</a>
          </li>
          <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle texto" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lineas
           </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item texto" href="/">Deseos</a>
             <a className="dropdown-item texto" href="/">Relajación</a>
              <div className="dropdown-divider"></div>
             <a className="dropdown-item texto" href="/">Nativa</a>
           </div>
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
