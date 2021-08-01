import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="row linea">
      <h3 className="col-sm-12 lineaTitulo">Summer Vibes</h3> 
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList

