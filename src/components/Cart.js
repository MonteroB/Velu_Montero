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
  if (providerLoading) return <h1 class="text-center">Cargando...</h1>;
  if (!cart.length) return <div className="container-fluid bg-dark text-white text-center p-5"><h1>Agrega productos para verlos aquí</h1><Link to='/items'><button type="button" class="btn btn-lg btn-outline-light">Ir a la tienda</button></Link></div>;
  return (
   <div className="container">      
     {show ? <Compra /> : null}
     <h4 class="text-center card-title">Mi compra <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill text-right" viewBox="0 0 16 16" onClick={clearCart} >
             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
             </svg></h4>
    <div className="row">
      <div className="col-sm-5">
			<FormCompra addOrden={addOrden} />
      </div>   
      <div className="col-sm-6"> 
        {cart.map((item) => (
           <div class="row shadow-sm p-2 bg-white">
           <div class="col-sm-4">
              <img src={item.pictureUrl} class="imgCart mr-2 mt-2 rounded-circle" ></img>
           </div>
           <div class="col-sm-6">
           <h6 key={item.id} class="card-title">Vela {item.title}  
             </h6>
             <p class="card-text">Cantidad: {item.quantity}<p class="card-text">Precio: ${item.price}</p></p>   
            </div>
            <div class="col-sm-1">  
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onClick={() => removeItem(item.id)}>
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
             </svg>
            </div>
           </div>
        ))}  
       
      <h4 class="card-header card-title text-dark">Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</h4> 
      </div>
    </div>
    <div class="card-footer text-muted">
    Gracias por confiar en nuestros productos
    </div>  
  </div>
    
  )
}
