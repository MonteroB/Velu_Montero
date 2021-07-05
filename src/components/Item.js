import React from 'react';
import { Link } from 'react-router-dom';
import {ItemCount} from './ItemCount';


const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="col-sm-2 card productos border-dark">
      <img src={pictureUrl} alt={title}></img>
      <div className="card-body productosTexto">    
     <Link to={`/item/${id}`} >
        <h6 className="card-title">{title}</h6>
     </Link>
     <p className="card-text">Precio:${price}</p>
     <ItemCount stock={5} initial={1}/>
     </div>
    </div>
  )
}
export default Item


