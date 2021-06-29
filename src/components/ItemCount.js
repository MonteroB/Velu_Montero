import React, { useState} from 'react';

export const ItemCount = ({initial}) => {
    const [numero, setNumero] = useState(initial);
    
    const handleIncrement = () => {
      setNumero(numero + 1);
    };
  
    const handleDecrement = () => {
      setNumero(numero - 1);
    };
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn-info" onClick={handleIncrement}>+</button>
                <p className="productosTexto"> {numero}</p>
                <button className="btn-info" onClick={handleDecrement}>-</button>
                </div>
        </div>
    )
}
