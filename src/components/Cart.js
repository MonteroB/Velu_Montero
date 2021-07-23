import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { DatosCompra } from './DatosCompra';

export const Cart = () => {
  const { cart, clearCart, removeItem, providerLoading } = useCartContext();
  if (providerLoading) return <h1>Cargando...</h1>;
  if (!cart.length) return <div className="productosTexto"><h1>No se añadieron productos</h1><Link to='/items'><button className="btn btn-info">Agregar productos al carrito</button></Link></div>;
  return (
    <div>     
<div class="card text-center">
  <div class="card-header">Mi compra</div>
  {cart.map((item) => (
      <div class="card-body">
      <h5 key={item.id} class="card-title">Producto: {item.title}</h5>
      <p class="card-text">Cantidad: {item.quantity}</p> 
      <p class="card-text">Precio por unidad: ${item.price}</p> 
      <button onClick={() => removeItem(item.id)}>X</button>
      </div>  
      ))}
     <p class="card-text">Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</p>
     //Formulario de datos del comprador
   <DatosCompra />
   <button class="btn btn-success">CONFIRMAR COMPRA</button>
   <button class="btn btn-secondary" onClick={clearCart}>VACIAR CARRITO</button>
  <div class="card-footer text-muted">
    Gracias por confiar en nuestros productos
  </div>
</div>
    </div>
    
  )
}
