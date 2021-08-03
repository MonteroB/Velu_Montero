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
    const { clearCart } = useCartContext();

	return (
		<div className="text-center">
		<div class="alert alert-success alert-dismissible fade show" role="alert">
		{orden.map((item) => (
		      <div key={item.id}>
          <strong>Gracias {item.nombre}!</strong> Tu orden fue enviada con éxito.
         <p>Tu ID de orden es {item.id}</p>
		 <p>El resumen de compra fue enviado a {item.email}</p>
		 </div>
			))}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={clearCart}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
		</div>
	);
};
