import React, {useState} from 'react'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({ product }) => {
  const { addToCart, realStock} = useCartContext();
  const [show, setShow] = useState(false);
  const stock = realStock(product);
  const onAdd = qty => {
    addToCart(product, qty);
    setShow(!show);
  }
  return (
        <div className="container">
          <div className="row detailBox">
           <div className="col-sm-4">
            <img src={product.pictureUrl} alt={product.title} className="img-fluid mx-auto rounded-circle p-2"/>
            </div>
             <div className="col-sm-4 p-3">
             <h3>{product.title}</h3>
             <p>{product.description}</p>
             </div>
             <div className="col-sm-4">
             <h5>Precio: ${product.price}</h5>
             {stock > 0 ? <>
               <p>Stock: {stock}</p>
              <ItemCount onAdd={onAdd} stock={stock} /> 
              </> : <h2>Sin stock</h2>}
              {show ? <Link to={"/cart"}><button className="btn btn-outline-primary m-1">Terminar mi compra</button></Link> : null}     </div>
          </div>            
        </div>
  )
}
/*

             {product.stock > 0 && <ItemCount onAdd={onAdd} stock={product.stock} />}
              */