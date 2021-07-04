import React, { useState, useEffect } from "react";
import { itemsData } from "./Item";
import { ItemCount } from "./ItemCount";

export function ItemList() {
  const [items, setItems] = useState([0]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
    }, 2000);
  });

  return (
    <div className="row linea">
      <h3 className="col-sm-12 lineaTitulo">Summer Vibes</h3>
      {items.map((item, idx) => {
        return (
          <div className="col-sm-2 card productos border-dark" key={idx}>
              <img src={item.pictureURL} className="card-img-top" alt="vela aromática" />
              <div className="card-body productosTexto">
                <h6 className="card-title"> {item.name}</h6>
                <p className="card-text"> {item.price}</p>
                <ItemCount stock={5} initial={1}/>
              </div>
          </div>
        );
      })}
    </div>
  );
}

