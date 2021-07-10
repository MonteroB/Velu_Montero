import React from 'react'
import { useCartContext } from '../context/CartContext';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({ product }) => {
  const { addToCart } = useCartContext();
  const onAdd = qty => addToCart(product, qty);
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
             <h6>{product.description}</h6>
            </div>
          </div>            
        </div>
  )
}

