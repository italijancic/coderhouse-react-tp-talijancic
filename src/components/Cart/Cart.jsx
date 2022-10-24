import React, { useContext } from 'react'

import {
  Container,
  Button,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  StackDivider,
  Center,
  Box,
  Show,
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
      <Container maxW={'7xl'} py={'20px'}>

        <Flex justify={'center'}>
          <Box maxW={{ lg: '75%' }}>

            {cart.map((item) => {
              return (
                <Grid
                  py={'10px'}
                  key={item.id}
                  templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
                  templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
                  gap={5}
                >

                  <GridItem colSpan={{ base: 1, md: 2 }}>
                    <Center>
                      <Flex>
                        <Image
                          rounded={'md'}
                          alt={'product image'}
                          src={item.img}
                          fit={'cover'}
                          maxH={'200px'}
                        />
                      </Flex>
                    </Center>
                  </GridItem>

                  <GridItem colSpan={{ base: 1, md: 4 }}>
                    <Stack
                      spacing={{ base: .5, sm: 1 }}
                      divider={
                        <StackDivider
                          borderColor={'gray.600'}
                        />
                      }>
                      <Heading
                        lineHeight={1.1}
                        fontWeight={300}
                        fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                        {item.title}
                      </Heading>
                      <Text
                        color={'gray.500'}
                        fontWeight={300}
                        fontSize={'xl'}>
                        {`Precio: U$S ${item.price}`}
                      </Text>
                      <Text
                        color={'gray.500'}
                        fontWeight={300}
                        fontSize={'xl'}>
                        {`Cantidad: ${item.count}`}
                      </Text>
                      <Text
                        color={'gray.500'}
                        fontWeight={300}
                        fontSize={'xl'}>
                        {`Total: U$S ${item.price}`}
                      </Text>

                      <Button
                        alignSelf={'end'}
                        onClick={() => removeItem(item.id)}
                        colorScheme='teal'
                        variant='ghost'
                        my={'10px'}
                        px={0}
                      >
                        Eliminar
                      </Button>

                    </Stack>
                  </GridItem>
                </Grid>
              )
            })}

          </Box>

          <Show above='lg'>
            <Box width={'25%'} m={'0 0 0 30px'} py={'20px'}>
              <UserForm
                cart={cart}
                getTotalPrice={getTotalPrice}
                clearCart={clearCart}
              />
            </Box>

          </Show>
        </Flex>

        <Show below='lg'>
          <Box>
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
