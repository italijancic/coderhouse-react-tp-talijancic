import React from 'react'
import Card from '../Card/Card'

// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { Typography } from '@mui/material'

import iPhone14 from '../Card/img/iphone14.jpg'
import iPhone13 from '../Card/img/iphone13.png'
import iPadPro from '../Card/img/ipadPro.jpeg'
import macBookPro from '../Card/img/MacbookPro.jpeg'
import macBookAir from '../Card/img/MacBookAirM2.jpeg'

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
    <div>

      <Typography variant="h2" component="h1">
        {props.greeting}
      </Typography>

      <Grid container spacing={6}>
        {products.map((product) => {
          return (
            <Grid key={product.id} xs={12} sm={6} xl={4}>
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                imgUrl={product.img}
              />
            </Grid>
          )
        })}
      </Grid>

    </div>
  )
}
