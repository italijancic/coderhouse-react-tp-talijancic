import "./card.css"

import React from 'react'
import Button from '../Button/Button'

export default function Card(props) {
  // Can return only one father element
  return (
    <div className='card'>
      <CardImg url={props.imgUrl} />
      <div className='card-detaail'>
        <h2>{props.title}</h2>
        <h4>{`$ ${props.price}`}</h4>
      </div>
      <Button text={`Comprar ${props.title}`} />
    </div>
  )
}

// Litle component inside a component file
function CardImg(props) {
  return (
    <div className='card-img'>
      <img src={props.url} alt=''></img>
    </div>
  )
}

