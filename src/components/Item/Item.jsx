import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

import { Link } from 'react-router-dom'

export default function Item(props) {
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
        <Link to={`/item/${props.id}`}>
          <CardMedia
            style={{
              width: "auto",
            }}
            component="img"
            height="500"
            image={props.imgUrl}
            alt={props.title}
          />
        </Link>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.stock} unidades
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }}>
          <Button size="small">Ver detalle</Button>
        </Link>
        <ItemCount initial={1} stock={props.stock} />
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}