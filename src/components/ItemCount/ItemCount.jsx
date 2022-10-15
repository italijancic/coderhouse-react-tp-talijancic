import React, { useState } from 'react'
import {
  Flex,
  Button,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'

export default function ItemCount({ initial, stock, onAddToCart, text }) {

  const [cant, setCant] = useState(initial)

  const addHandler = (props) => {
    if (cant < stock) setCant(cant + 1)
  }

  const substractionHandler = () => {
    if (cant > initial) setCant(cant - 1)
  }

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
    >
      <Flex mt="1" justifyContent="space-between" alignContent="center">

        <Button onClick={substractionHandler} colorScheme='teal' variant='solid' px='30px'>
          -
        </Button>

        <Text
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={'2xl'}
          fontWeight={'300'}>
          {cant}
        </Text>

        <Button onClick={addHandler} colorScheme='teal' variant='solid' px='30px'>
          +
        </Button>

      </Flex>

      <Button
        onClick={() => { onAddToCart(cant) }}
        rounded={'none'}
        w={'full'}
        size={'lg'}
        py={'7'}
        bg={useColorModeValue('gray.900', 'gray.50')}
        color={useColorModeValue('white', 'gray.900')}
        textTransform={'uppercase'}
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}>
        {text}
      </Button>

    </SimpleGrid>
  )
}
