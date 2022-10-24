import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  VStack,
  Spinner,
} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import ItemList from './ItemList'

import { firebaseGetProducts, firebaseGetProductsByCategory } from '../../services/firebase'
// import PageNotFound from '../PageNotFound/PageNotFound'

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === undefined) {
      firebaseGetProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
    } else {
      firebaseGetProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => {
          console.log(error.message)
        })
    }
  }, [categoryId])

  if (products.length > 0) {
    return (
      <Box px={{ base: 4, sm: 20, lg: 30, '2xl': 40 }}>
        <Box paddingTop={'20px'}>
          <Text
            fontSize={{ base: '2xl', sm: '4xl' }}
          >
            {props.greeting}
          </Text>
        </Box>

        <ItemList productsList={products} />

      </Box>
    )
  }
  else {
    return (
      <Center p={'50px 0'} >
        <VStack>

          <Spinner size={'xl'} />

          <Text fontSize={{ base: 'xl', sm: 'xl' }} >
            Cargando ...
          </Text>

        </VStack>
      </Center>
    )
  }
}

