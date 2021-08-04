import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { getFirestore } from '../firebase';


export const ItemListContainer = () => {
const [items, setItems]= useState([])
const { category } = useParams();

useEffect( () => {        
            const db = getFirestore();
            let itemCollection;
            if (category){
                itemCollection = db.collection("items").where("category", "==", `${category}`);
            } else{
                itemCollection = db.collection("items");
            };
            const itemCollectionQuery = itemCollection.get()
            itemCollectionQuery.then((querySnapshot) => {
                let documento = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                setItems(documento);
            })
            .catch((e) => {console.log(e)})
        }, [category]);

  return (
    <ItemList items={items} />
    
  )
}

