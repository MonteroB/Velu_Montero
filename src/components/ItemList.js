import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {

  return (
    <div className="row linea p-2">
      <h3 className="col-sm-12 lineaTitulo">Summer Vibes</h3> 
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList

