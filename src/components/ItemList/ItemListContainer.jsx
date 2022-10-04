import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

import { useParams } from 'react-router-dom'

// My imports
import getProducts, { getPoductsByCategory } from '../../mockAPI/mockAPI'
import ItemList from './ItemList'

export default function ItemListContainer(props) {

  const [ products, setProducts ] = useState([])
  const { categoryId } = useParams()

  useEffect( () => {
    if (categoryId === undefined) {
      getProducts()
        .then(data => setProducts(data))
        .catch(error => console.error(error))
    } else {
      getPoductsByCategory(categoryId)
        .then(data => setProducts(data))
        .then(error => console.log(error))
    }
  }, [categoryId])

  return (
    <Box>

      <Typography
        variant='h2'
        component='h1'
        style={{margin: '0.5em 0'}}
      >
        {props.greeting}
      </Typography>

      <ItemList productsList={products}/>

    </Box>
  )
}
