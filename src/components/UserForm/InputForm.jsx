import React from 'react'

import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function InputForm(props) {

  return (
    <FormControl py={'10px'}>
      <FormLabel >{props.title}</FormLabel>
      <Input
        value={props.value}
        required={props.required}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </FormControl>
  )

}
