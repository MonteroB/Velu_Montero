import React, { useState, useEffect } from "react";
import React from 'react'
import { itemsData } from "./Item";

// console.log("ITEMS DATA", itemsData);

export default function ItemList() {
  // USE STATE HOOK
  // number = es mi estado inicial
  // setNumner es la funcion que me permite modificar
  // el estado inicial
  // useState("AQUI EL VALOR DE MI ESTADO")
  const [numero, setNumero] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items);
    }, 2000);
  });

  const handleIncrement = () => {
    // console.log("HICISTE CLICK")
    setNumero(numero + 1);
  };

  const handleDecrement = () => {
    // console.log("HICISTE CLICK")
    setNumero(numero - 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{numero}</p>
      <button onClick={handleIncrement}>INCREMENTAR</button>
      <button onClick={handleDecrement}>DECREMENTAR</button>
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>
              {item.name} precio: {item.price}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

