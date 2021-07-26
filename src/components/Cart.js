import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Compra } from './Compra';
import { FormCompra } from './FormCompra';
import { db } from '../firebase';


export const Cart = () => {
  const [show, setShow] = useState();
  
  const addOrden = async (object) => {
		await db.collection('ordenes').doc().set(object);
		console.log('Orden de compra enviada!');
    setShow(!show);
	};
  const { cart, clearCart, removeItem, providerLoading } = useCartContext();
  if (providerLoading) return <h1>Cargando...</h1>;
  if (!cart.length) return <div className="productosTexto"><h1>No se añadieron productos</h1><Link to='/items'><button className="btn btn-info">Agregar productos al carrito</button></Link></div>;
  return (
   <div className="container">  
    <div className="row">
      <div className="col-sm-5">
			<FormCompra addOrden={addOrden} />
      </div>   
      <div className="col-sm-6"> 
       <div class="card text-center border-dark mb-3">
        <div class="card-header">Mi compra</div>
        {cart.map((item) => (
         <div class="card-body border-dark mb-3">
          <h5 key={item.id} class="card-title">Vela {item.title}  <button className="card-subtitle mb-2 btn-danger xx-small" onClick={() => removeItem(item.id)}>x</button></h5>
          <p class="card-text">Cantidad: {item.quantity}<p class="card-text">Precio por unidad: ${item.price}</p></p>   
         </div>  
        ))}
        <button class="btn btn-secondary" onClick={clearCart}>VACIAR CARRITO</button>
        <p class="card-header card-title text-dark">Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</p> 
       </div>
      </div>
    </div>
    <div class="card-footer text-muted">
    Gracias por confiar en nuestros productos
    </div>
    {show ? <Compra /> : null}  
  </div>
    
  )
}
