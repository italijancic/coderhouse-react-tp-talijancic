import React, { useState } from 'react'
import {
  Flex,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function ItemCount({initial, stock}) {

  const [cant, setCant] = useState(initial)

  const addHandler = () => {
    if (cant < stock) setCant(cant + 1)
  }

  const substractionHandler = () => {
    if (cant > initial) setCant(cant - 1)
  }

  return (
    <Flex mt="1" justifyContent="space-between" alignContent="center">
      <Button onClick={addHandler} colorScheme='teal' variant='ghost'>
        +
      </Button>
      <Text
        color={useColorModeValue('gray.500', 'gray.400')}
        fontSize={'2xl'}
        fontWeight={'300'}>
        {cant}
      </Text>
      <Button onClick={substractionHandler} colorScheme='teal' variant='ghost'>
        -
      </Button>
    </Flex>
  )
}
