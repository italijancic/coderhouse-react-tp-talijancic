import React, { useContext } from 'react'

import {
  Container,
  ListItem,
  UnorderedList,
  Button,
} from '@chakra-ui/react';


import 'sweetalert2/src/sweetalert2.scss'

import { cartContext } from '../../contexts/CartContext';
import PageNotFound from '../PageNotFound/PageNotFound';
import UserForm from '../UserForm/UserForm';

export default function Cart() {

  const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext)

  if (cart.length < 1) {
    return (
      // Made msg parametric
      <PageNotFound />
    )
  } else {

    return (
      <Container>
        {cart.map((item) => {
          return (
            <UnorderedList key={item.id}>
              <ListItem>Articulo: {item.title}</ListItem>
              <ListItem>Precio: ${item.price}</ListItem>
              <ListItem>Cantidad: {item.count}</ListItem>
              <ListItem>Total: ${item.count * item.price}</ListItem>
              <Button
                onClick={() => removeItem(item.id)}
                colorScheme='teal'
                variant='solid'
                px='30px'
                m={'10px'}
                size={'sm'}
              >
                Eliminar item
              </Button>

              <UserForm
                cart={cart}
                getTotalPrice={getTotalPrice}
                clearCart={clearCart}
              />

            </UnorderedList>
          )
        })}
        {/* <Button
          onClick={handleCheckOut}
          colorScheme='teal'
          variant='solid'
          px='30px'
          size={'sm'}
          m={'10px'}
        >
          Finalizar compra
        </Button> */}
      </Container>
    )
  }
}
