import React, { useContext } from 'react'
import { cartContext } from '../../contexts/CartContext'

import {
  Icon,
  Link,
  Text,
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
        bottom={-1}
        right={ getTotalItemCount()>9 ? -3 : -1.5}
      >
        {getTotalItemCount()}
      </Text>
    </Box>
  )
}
