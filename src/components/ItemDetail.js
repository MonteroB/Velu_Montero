import React, {useState} from 'react'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({ product }) => {
  const { addToCart} = useCartContext();
  const [show, setShow] = useState(false);
  const onAdd = qty => {
    addToCart(product, qty);
    setShow(!show);
  }
  return (
        <div className="container">
          <div className="row detailBox">
           <div className="col-sm-6">
            <img src={product.pictureUrl} alt={product.title} className="img-fluid mx-auto"/>
            </div>
             <div className="col-sm-6 detailBox">
             <h3>{product.title}</h3>
             <h6>Precio: ${product.price}</h6>
             {product.stock > 0 && <ItemCount onAdd={onAdd} stock={product.stock} />}
             {show ? <Link to={"/cart"}><button className="btn btn-success">Terminar mi compra</button></Link> : null}
             <h6>{product.description}</h6>
            </div>
          </div>            
        </div>
  )
}