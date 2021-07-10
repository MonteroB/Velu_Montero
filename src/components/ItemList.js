import React from 'react';
import Item from './Item';
import { useHistory } from 'react-router-dom';

const ItemList = ({ items }) => {
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.value)
    history.push(`/category/${e.target.value}`)
    }
  return (
    <div className="row linea">
      <h3 className="col-sm-12 lineaTitulo">Summer Vibes</h3>
      <div className="col-sm-12">
      <h5 className="productosTexto">Filtrar por:
      <select onChange={handleChange}>
            <option value="">Aromas</option>
            <option value="dulce">Dulces</option>
            <option value="citrico">Cítricos</option>
            <option value="madera">Maderas</option>
          </select>
      </h5>
      </div> 
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList

