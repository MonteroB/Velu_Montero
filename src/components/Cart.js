import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (!cart.length) return <Redirect to='/items' />;
  return (
    <div>     
<div class="card text-center">
  <div class="card-header">Mi compra</div>
  {cart.map((item) => (
      <div class="card-body">
      <h5 class="card-title">Producto: {item.title}</h5>
      <p class="card-text">Cantidad: {item.quantity}</p>  
      </div>  
      ))}
   <button class="btn btn-secondary" onClick={clearCart}>VACIAR CARRITO</button>
  <div class="card-footer text-muted">
    Gracias por confiar en nuestros productos
  </div>
</div>
    </div>
    
  )
}
