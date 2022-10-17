import React, { useContext } from 'react'
import { cartContext } from '../../contexts/CartContext'

import {
  Icon,
  Link,
  Text,
  // HStack,
  Box,
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom';

import { HiShoppingCart } from 'react-icons/hi'

export default function CartWidget() {

  const { getTotalItemCount } = useContext(cartContext)

  return (
    <Box position={'relative'}>
      <Link as={ReachLink} to={'/cart'}>
        <Icon
          as={HiShoppingCart}
          w={6}
          h={6}
        />
      </Link>
      <Text
        fontSize={'small'}
        position='absolute'
        bottom={-0.5}
        right={-1.5}
      >
        {getTotalItemCount()}
      </Text>
    </Box>
  )
}
