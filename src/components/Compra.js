import React, { useState, useEffect } from 'react';
import { useCartContext } from '../context/CartContext';
import { db } from '../firebase';

export const Compra = () => {
	const [orden, setOrden] = useState([]);

	const getOrden = () => {
		db.collection('ordenes').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setOrden(docs);
		});
	};
	useEffect(() => {
		getOrden();
	}, []);
    const { cart, clearCart } = useCartContext();

	return (
		<div className="text-center">
            <h3>DATOS DE TU COMPRA</h3>
			{orden.map((item) => (
		      <div key={item.id} className="cardStyles">
                <p>Código de compra: {item.id}</p>
				<p>Nombre: {item.nombre}</p>
				<p>Apellido: {item.apellido}</p>
				<p>Email: {item.email}</p>
		      </div>
			))}
            {cart.map((item) => (
             <div className="cardStyles">
               <p key={item.id} class="card-title">Producto: Vela {item.title}</p>
               <p class="card-text xx-small">Cantidad: {item.quantity}</p> 
               <p class="card-text">Precio por unidad: ${item.price}</p> 
               <p class="text-dark">Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</p> 
             </div>  
      ))}
          <button class="btn btn-info" onClick={clearCart}>VOLVER A INICIO</button>
		</div>
	);
};
