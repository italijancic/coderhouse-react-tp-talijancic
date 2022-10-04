import React from 'react'
import { Grid } from '@mui/material'
import Item from '../Item/Item'

export default function ItemList(props) {
  return (
    <Grid container spacing={{ xs: 3, sm: 3, xl: 5 }}>
      {props.productsList.map((product) => {
        return (
          <Grid item key={product.id} xs={12} lg={6} xl={4}>
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              stock={product.stock}
              imgUrl={product.img}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
