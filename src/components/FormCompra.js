import React, { useState } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCartContext } from '../context/CartContext';

export const FormCompra = ({ addOrden }) => {
	
    const { cart } = useCartContext();
	const initialState = {
		nombre: '',
		apellido: '',
		email: '',
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        items: cart,
	};
	const [values, setValues] = useState(initialState);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addOrden(values); 
		setValues({ ...initialState }); 
	};

	return (
		<div className="form-group">
			<Form onSubmit={handleOnSubmit}>
				<Form.Field  className="form-group">
					<input
						placeholder='Nombre'
						onChange={handleOnChange}
						name='nombre'
						value={values.nombre}
                        className="form-control"
					/>
				</Form.Field>
				<Form.Field  className="form-group">
					<input
						placeholder='Apellido'
						onChange={handleOnChange}
						name='apellido'
						value={values.apellido}
                        className="form-control"
					/>
				</Form.Field>
				<Form.Field  className="form-group">
					<TextArea
						placeholder='Email'
						onChange={handleOnChange}
						name='email'
						value={values.email}
                        className="form-control"
					/>
				</Form.Field>
                <small id="emailHelp" class="form-text text-muted">Te llegará un mail con la confirmación de tu compra.</small>
                <button type='submit' id="comprar" class="btn btn-success">
					CONFIRMAR COMPRA
				</button>
			</Form>
		</div>
	);
};

