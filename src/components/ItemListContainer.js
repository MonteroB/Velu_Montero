import React, { useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import {itemsCollection} from '../firebase';


export const ItemListContainer = () => {
  //const { categoryName } = useParams();
const [items, setItems]= useState([])
useEffect(() => {
    (async () => {
        const response = await itemsCollection.get();
       setItems(response.docs.map(doc => doc.data()))
    })();
}, [])

  return (
    <ItemList items={[items]} />
  )
}

