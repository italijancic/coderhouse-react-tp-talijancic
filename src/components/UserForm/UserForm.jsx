import React, { useState } from 'react';

import {
  Button,
  // FormControl,
  Box,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import { firebaseCreateBuyOrder } from '../../services/firebase';

import InputForm from './InputForm';

export default function UserForm({ cart, getTotalPrice, clearCart }) {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    age: '',
    phone: '',
  })

  function onInputChange(evt) {
    let key = evt.target.name
    let value = evt.target.value
    setUser(values => ({...values, [key]: value}))
  }

  function onSubmit(evt) {
    evt.preventDefault()

    const buyerData = user

    setUser({
      name: '',
      age: '',
      phone: '',
    })

    const orderData = {
      buyerData: buyerData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date()
    }

    firebaseCreateBuyOrder(orderData)
      .then(newOrderId => {
        // Ver como mostrar el ID de compra
        Swal.fire({
          title: 'Gracias!',
          icon: 'success',
          text: 'Muchas gracias, finalizaste tu compra',
          confirmButtonText: 'OK'
        }).then(() => {
          clearCart()
          navigate('/')
          // We can do this here too
          // navigate(`/thankyou/${newOrderId}`)
        })
      })
  }

  return (
    <Box>
      <InputForm
        value={user.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />

      <InputForm
        value={user.age}
        title="Edad"
        name="age"
        required={true}
        onChange={onInputChange}
      />

      <InputForm
        value={user.phone}
        title="Telefono"
        name="phone"
        required={true}
        onChange={onInputChange}
      />

      <Button
        onClick={onSubmit}
        colorScheme='teal'
        variant='solid'
        px='30px'
        size={'sm'}
        m={'10px'}
      >
        Crear Orden
      </Button>
    </Box>
  )
}