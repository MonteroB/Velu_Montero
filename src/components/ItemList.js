import React, { useState, useEffect } from "react";
import { itemsData } from "./Item";

export function ItemList() {
  const [numero, setNumero] = useState(0);
  const [items, setItems] = useState([0]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
    }, 2000);
  });

  const handleIncrement = () => {
    setNumero(numero + 1);
  };

  const handleDecrement = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="productos">
      {items.map((item, idx) => {
        return (
        <div className="row row-cols-4 row-cols-md-4">
         <div className="col mb-4">
          <div className="card border-dark" key={idx}>
              <img src={item.pictureURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">Aroma {item.name}</h6>
                <p className="card-text"> {item.price}</p>
                <div>
                <p>{numero}</p>
                <button className="btn-dark" onClick={handleIncrement}>+</button>
                <button className="btn-dark" onClick={handleDecrement}>-</button>
                </div>
              </div>
          </div>
         </div>
        </div>
        );
      })}
    </div>
  );
}

