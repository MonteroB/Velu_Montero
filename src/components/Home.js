import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
          <div class="home container-fluid bg-dark text-white text-center">
           <h1>Próximos lanzamientos</h1>
           <p>Nuevos aromas renuevan tus sentidos.</p>
           <Link to='/items'><button type="button" class="btn btn-lg btn-outline-light">Comprar</button></Link>
          </div>
        </div>
    )
}
