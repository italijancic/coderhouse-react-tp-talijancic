import React from 'react'
import { Icon } from '@chakra-ui/react'
import { HiShoppingCart } from 'react-icons/hi'

export default function CartWidget() {
  return (
    <Icon
      as={HiShoppingCart}
      w={6}
      h={6}
    />
  )
}
