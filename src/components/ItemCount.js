import React, { useState} from 'react';

export const ItemCount = ({initial, stock}) => {
    const [numero, setNumero] = useState(initial);
    
    const handleIncrement = () => {
      if(numero < stock) {
        setNumero(numero + 1);
      } 
    };
  
    const handleDecrement = () => {
      if(numero > initial) {
        setNumero(numero - 1);
      } 
    };
    return (
        <div className="quantity">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn-info btn-sm" onClick={handleIncrement}>+</button>
                <p className="productosTexto"> {numero}</p>
                <button className="btn-info btn-sm" onClick={handleDecrement}>-</button>
                </div>
                <button type="button" className="btn btn-outline-dark btn-sm productosTexto">Añadir</button>
        </div>
    )
}
