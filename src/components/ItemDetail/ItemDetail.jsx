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
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

// Read params from url
import ItemCount from '../ItemCount/ItemCount';

// My imports
export default function ItemDetail({ product }) {

  // const [cant, setCant] = useState(0)

  const { addToCart, isInCart } = useContext(cartContext)

  function handlerAddToCart(cant) {
    // setCant(cant)
    addToCart(product, cant)
  }

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          {product.img ?
            <Image
              rounded={'md'}
              alt={'product image'}
              src={product.img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
            :
            <Spinner />
          }
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
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {product.price ? `U$S ${product.price}` : ''}
            </Text>
            <Stack direction="row" alignItems="center" justifyContent={'start'}>
              <MdLocalShipping />
              <Text color="teal">Entrega en 2-3 días hábiles</Text>
            </Stack>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
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
            <h2>Ver carrito</h2>}
        </Stack>
      </SimpleGrid>
    </Container>
  )
}