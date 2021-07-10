import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { useCartContext } from '../context/CartContext';

export const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { database } = useCartContext();
  return (
    <ItemList items={database} />
  )
}

