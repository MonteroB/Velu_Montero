import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

export const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://www.mocky.io/v3/00f7d59b-0e87-4f56-ad41-eb56352db80c");
      if (!categoryName) return setItems(data);
      const catItems = data.filter(item => item.category === categoryName);
      setItems(catItems);
    })();
  }, [categoryName]);
  return (
    <ItemList items={items} />
  )
}
