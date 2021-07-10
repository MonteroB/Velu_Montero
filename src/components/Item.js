import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="col-sm-2 card border-dark">
      <img src={pictureUrl} alt={title}></img>
      <div className="card-body productosTexto"> 
      <h6 className="card-title">{title}</h6>   
     <p className="card-text">Precio: ${price}</p>
     <Link to={`/item/${id}`} >
        <p className="card-text">+ info.</p>
     </Link>
     </div>
    </div>
  )
}
export default Item


