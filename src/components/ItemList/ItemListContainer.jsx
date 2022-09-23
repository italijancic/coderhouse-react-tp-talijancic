import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

// My imports
import ProductCard from '../ProductCard/ProductCard'
// Cards products images
import iPhone14 from '../ProductCard/img/iphone14.jpg'
import iPhone13 from '../ProductCard/img/iphone13.png'
import iPadPro from '../ProductCard/img/ipadPro.jpeg'
import macBookPro from '../ProductCard/img/MacBookPro.webp'
import macBookAir from '../ProductCard/img/MacBookAirM2.jpeg'

export default function ItemListContainer(props) {

  const products = [
    {
      'id': 1,
      'title': 'iphone14',
      'price': 1000,
      'img': iPhone14
    },
    {
      'id': 2,
      'title': 'iphone13',
      'price': 890,
      'img': iPhone13
    },
    {
      'id': 3,
      'title': 'iPadPro',
      'price': 880,
      'img': iPadPro
    },
    {
      'id': 4,
      'title': 'MacBook Pro',
      'price': 2300,
      'img': macBookPro
    },
    {
      'id': 5,
      'title': 'MacBook Air M2',
      'price': 1400,
      'img': macBookAir
    }
  ]

  return (
    <Box>
      <Typography
        variant='h2'
        component='h1'
        style={{margin: '0.5em 0'}}
      >
        {props.greeting}
      </Typography>

      <Grid container spacing={{xs:3, sm:3, xl:5}}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} lg={6} xl={4}>
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                imgUrl={product.img}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
