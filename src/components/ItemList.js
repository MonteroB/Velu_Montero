import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ items }) => {

  return (
    <div className="row linea p-2 pb-1">
      <h3 className="col-sm-12 lineaTitulo">Summer Vibes</h3> 
      <p className="col-sm-12 text-center p-2">Aromas: <Link className="texto p-2" exact to={"/category/dulce"}>Dulce</Link>
      <Link className="texto p-2" exact to={"/category/citrico"}>    Cítrico</Link>
      <Link className=" texto p-2" exact to={"/category/floral"}>Floral</Link></p>
      
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList

