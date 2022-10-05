import React, { useEffect, useState } from 'react'

// Read params from url
import { useParams } from 'react-router-dom'

// My imports
import { getProduct } from '../../mockAPI/mockAPI'
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    getProduct(id)
      .then(data => {
        setProduct(data)
      })
      .catch(error => console.error(error))
  }, [id])

  return (
    <ItemDetail product={product}/>
  );
}