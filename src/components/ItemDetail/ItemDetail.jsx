import React, { useContext } from 'react'
import { cartContext } from '../../contexts/CartContext';

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  Skeleton,
  Button,
  Link,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

import { Link as ReachLink } from 'react-router-dom'

// Read params from url
import ItemCount from '../ItemCount/ItemCount';

// My imports
export default function ItemDetail({ product }) {

  const { addToCart, isInCart } = useContext(cartContext)

  function handlerAddToCart(cant) {
    addToCart(product, cant)
  }

  if (product.title)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={product.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {product.title}
              </Heading>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'2xl'}>
                {product.price ? `U$S ${product.price}` : ''}
              </Text>
              <Stack mt={'2'} direction="row" alignItems="center" justifyContent={'start'}>
                <MdLocalShipping />
                <Text color="teal">Entrega en 2-3 días hábiles</Text>
              </Stack>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={'gray.600'}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }} align={'start'}>
                <Text
                  color={'gray.500'}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {product.highlight}
                </Text>
                <Text fontSize={'lg'}>
                  {product.brief}
                </Text>
              </VStack>
            </Stack>

            {isInCart(product.id) === undefined ?
              <ItemCount
                text='Agregar al carrito'
                onAddToCart={handlerAddToCart}
                initial={1}
                stock={product.stock}
              />
              :
              <Link
                as={ReachLink}
                to={'/cart'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  colorScheme={'teal'}
                  variant='solid'
                >
                  Ver Carrito
                </Button>
              </Link>}
          </Stack>
        </SimpleGrid>
      </Container>
    )
  else
    return (
      <Container p={'50px'} alignContent={'center'} maxW={'7xl'}>
        <Skeleton height={'300px'} />
      </Container>
    )
}