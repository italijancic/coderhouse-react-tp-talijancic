import React, { useState } from 'react'
import {
  Button,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
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
    <Wrap spacing='30px' align='center' justify='space-between'>

      <WrapItem>
        <Button onClick={substractionHandler} colorScheme='teal' variant='solid' px='30px'>
          -
        </Button>
      </WrapItem>

      <WrapItem>
        <Text
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize={'2xl'}
          fontWeight={'300'}>
          {cant}
        </Text>
      </WrapItem>
      <WrapItem>
        <Button onClick={addHandler} colorScheme='teal' variant='solid' px='30px'>
          +
        </Button>
      </WrapItem>

      <WrapItem width={{base: 'full', md: 'auto'}}>
        <Button
          onClick={() => { onAddToCart(cant) }}
          rounded={'none'}
          w={{ base: 'full', md: 'auto' }}
          size={'lg'}
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}>
          {text}
        </Button>
      </WrapItem>

    </Wrap>
  )
}
