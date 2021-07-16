import React, { useState } from 'react';

export const ItemCount = ({ stock, onAdd }) => {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  return (
    <div style={{ fontSize: 20, display: 'flex', flexDirection: 'column' }}>
      <div>
        <button className="btn btn-dark" onClick={() => setToAdd     (toAdd - 1 ? toAdd - 1 : toAdd)}>-</button>
        <span>{toAdd}</span>
        <button className="btn btn-dark" onClick={() => setToAdd (toAdd === stock ? toAdd : toAdd + 1)}>+</button >
      </div>
      <button id="comprar" className="btn btn-info" onClick={() => onAdd(toAdd)}>COMPRAR</button>
    </div >
  )
}
