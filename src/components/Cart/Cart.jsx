import React, { useContext } from 'react'

import {
  Container,
  Flex,
  Box,
  Show,
  Heading
} from '@chakra-ui/react';


import { cartContext } from '../../contexts/CartContext';
import PageNotFound from '../PageNotFound/PageNotFound';
import UserForm from '../UserForm/UserForm';
import CartItem from './CartItem';

export default function Cart() {

  const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext)

  if (cart.length < 1) {
    return (
      <PageNotFound
        title='Carro vacío'
        subtitle='No agregaste ningún item a tu carro aún'
        msg=''
      />
    )
  } else {

    return (
      <Container maxW={'7xl'} py={'20px'}>

        <Flex justify={'center'}>
          <Box maxW={{ md: '70%' }} p={{ md: '0 40px 0 0' }}>
            {/* Render each item on cart as a cart item */}
            {cart.map((item) => {
              return (
                <CartItem key={item.id} item={item} removeItem={removeItem} />
              )
            })}

            {/* Print total price */}
            <Box textAlign={'end'} p={{base: '0 0 20px 0', md: '20px 0'}}>
              <Heading
                lineHeight={1.1}
                fontWeight={300}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
              >
                {`Total: U$S ${getTotalPrice()}`}
              </Heading>
            </Box>
          </Box>

          <Show above='md'>
            <Box width={'30%'} p={'0 0 0 40px'} key={new Date().getTime()}>
              <UserForm
                cart={cart}
                getTotalPrice={getTotalPrice}
                clearCart={clearCart}
              />
            </Box>

          </Show>
        </Flex>

        <Show below='md'>
          <Box key={new Date().getTime()}>
            <UserForm
              cart={cart}
              getTotalPrice={getTotalPrice}
              clearCart={clearCart}
            />
          </Box>
        </Show>

      </Container>
    )
  }
}
