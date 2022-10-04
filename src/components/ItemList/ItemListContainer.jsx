import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import ItemList from './ItemList'
import getProducts, { getPoductsByCategory } from '../../mockAPI/mockAPI'

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === undefined) {
      getProducts()
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    } else {
      getPoductsByCategory(categoryId)
        .then(data => setProducts(data))
        .catch(error => {
          console.error(error)
        })
    }
  }, [categoryId])

  return (
    <Box px={{base: 4, lg: 40}}>
      <Box paddingTop={'20px'}>
        <Text
          fontSize={{base: '2xl', sm: '4xl'}}
        >
          {props.greeting}
        </Text>
      </Box>

      <ItemList productsList={products} />

    </Box>
  )

}
