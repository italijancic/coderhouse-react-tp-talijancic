import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard(props) {
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
          image={props.imgUrl}
          alt={props.title}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}