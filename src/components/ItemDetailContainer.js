import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../components/ItemDetail';
import { itemsCollection } from '../firebase';

export const ItemDetailContainer = () => {
      const { id } = useParams();
      const [item, setItem] = useState();
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        (async () => {
        const response = await itemsCollection.doc(id).get();
        setItem({id: response.id, ...response.data()});
         setLoading(false);
        })()
        }, [id]);

      if (loading || !item) return <h1>Cargando...</h1>
      return (
        <ItemDetail product={item} />
      )
    }


