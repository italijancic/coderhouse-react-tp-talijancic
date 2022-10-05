import React from 'react'
import {
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import Item from '../Item/Item'


export default function ItemList(props) {
  return (
    <Wrap padding={'30px 0 30px 0'} spacing='30px' align='center' justify='center'>

      {props.productsList.map((product) => {
        return(
          <WrapItem key={product.id}>
            <Item product={product} />
          </WrapItem>
        )
      })}

    </Wrap>
  )
}
