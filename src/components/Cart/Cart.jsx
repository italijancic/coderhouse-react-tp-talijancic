import React, { useContext } from 'react'

import {
  Container,
  ListItem,
  UnorderedList,
  Button,
} from '@chakra-ui/react';

import { cartContext } from '../../contexts/CartContext';

export default function Cart() {

  const { cart, removeItem } = useContext(cartContext)

  return (
    <Container>
      {cart.map((item) => {
        return (
          <UnorderedList key={item.id}>
            <ListItem>{item.title}</ListItem>
            <ListItem>{item.price}</ListItem>
            <ListItem>{item.count}</ListItem>
            <ListItem>
              <Button onClick={() => removeItem(item.id)} colorScheme='teal' variant='solid' px='30px'>
                Eliminar item
              </Button>
            </ListItem>
          </UnorderedList>
        )
      })}
    </Container>
  )
}
