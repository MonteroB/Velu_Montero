import React, { useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import {itemsCollection} from '../firebase';


export const ItemListContainer = () => {
const [items, setItems]= useState([])

 useEffect(() => {
    (async () => {
        const response = await itemsCollection.get();
       setItems(response.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })();
}, []);

/*    FILTRO POR AROMA
const aromaDulce = itemsCollection.where('category', '==', 'dulce');
aromaDulce.get().then((querySnapshot) => {
    if(querySnapshot.size === 0) {
        console.log('no results');
    }
    setItems(querySnapshot.docs.map(doc => doc.data()));
}); */

  return (
    <ItemList items={items} />
  )
}

