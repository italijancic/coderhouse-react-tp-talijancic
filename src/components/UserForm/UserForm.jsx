import React, { useState } from 'react';

import {
  Button,
  Stack,
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
    email: '',
    phone: '',
  })

  function onInputChange(evt) {

    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    })

  }

  function onSubmit(evt) {
    evt.preventDefault()

    const buyerData = user


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
          // Empty cart
          clearCart()
          // Clear state
          setUser({
            name: '',
            email: '',
            phone: '',
          })
          // Back to home
          navigate('/')
        })
      })
  }

  return (
    <Stack>
      <form onSubmit={onSubmit}>
        <InputForm
          value={user.name}
          title="Nombre"
          name="name"
          type='text'
          required={true}
          onChange={onInputChange}
        />

        <InputForm
          value={user.email}
          title="Email"
          name="email"
          type='email'
          required={true}
          onChange={onInputChange}
        />

        <InputForm
          value={user.phone}
          title="Telefono"
          name="phone"
          type='tel'
          required={true}
          onChange={onInputChange}
        />

        <Button
          onClick={onSubmit}
          alignSelf={'end'}
          colorScheme='teal'
          variant='solid'
          my={'10px'}
        >
          Crear Orden
        </Button>

      </form>
    </Stack>
  )
}