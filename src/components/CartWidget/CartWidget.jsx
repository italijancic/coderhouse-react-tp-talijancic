import React, { useContext } from 'react'
import { cartContext } from '../../contexts/CartContext'

import {
  Icon,
  Link,
  Text,
  HStack,
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom';

import { HiShoppingCart } from 'react-icons/hi'

export default function CartWidget() {

  const { getTotalItemCount } = useContext(cartContext)

  return (
    <Link as={ReachLink} to={'/'}>
      <HStack spacing={0}>
        <Icon
          as={HiShoppingCart}
          w={6}
          h={6}
        />
        <Text fontSize={'sm'} >
          {getTotalItemCount()}
        </Text>
      </HStack>
    </Link>

  )
}
