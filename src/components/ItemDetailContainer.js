import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../components/ItemDetail';
import { useCartContext } from '../context/CartContext';

export const ItemDetailContainer = () => {
      const { id } = useParams();
      const { database } = useCartContext();
      const [item, setItem] = useState();
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
    
      useEffect(() => {
        const foundItem = database.find(el => el.id === +id);
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError(true);
        }
        setLoading(false);
      }, [id, database]);
      if (error) return <h3>Agrega productos para verlos aquí</h3>
      if (loading || !item) return <h1>Cargando...</h1>
      return (
        <ItemDetail product={item} />
      )
    }


