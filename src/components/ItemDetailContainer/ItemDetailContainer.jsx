import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Read params from url
import { Link, useParams } from 'react-router-dom'

// My imports
import { getProduct } from '../../mockAPI/mockAPI'

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
    <Card
      raised
    // sx={{padding: "0.1em" }}
    >
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center"
        }}
      >
        <CardMedia
          style={{
            width: "auto",
          }}
          component="img"
          height="500"
          image={product.img}
          alt={product.title}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {product.detail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.stock} unidades
        </Typography>
      </CardContent>
      <CardActions>
          <Link to='/'>
            <Button size="small">Volver</Button>
          </Link>
      </CardActions>
    </Card>
  )
}