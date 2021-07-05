import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams();  const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
     (async () => {
      const { data } = await axios.get("https://www.mocky.io/v3/00f7d59b-0e87-4f56-ad41-eb56352db80c")
      const foundItem = data.find(item => item.id === +id);
      setItem(foundItem);
      setLoading(false);
    })();
  }, [id]);
  if (loading) return <h5>Cargando...</h5>
  return (
    <ItemDetail {...item} />
  )
}

