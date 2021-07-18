import React, { useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import {itemsCollection} from '../firebase';


export const ItemListContainer = () => {
  //const { categoryName } = useParams();
const [items, setItems]= useState([])
useEffect(() => {
    (async () => {
        const reponse = await itemsCollection.get();
       setItems(reponse.docs.map(item => ({id: item.id, ...item.data()})))
    })();
}, [])

  return (
    <ItemList items={[items]} />
  )
}

