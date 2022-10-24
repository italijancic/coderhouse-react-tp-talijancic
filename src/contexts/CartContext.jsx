import React, { createContext, useState } from 'react'

const cartContext = createContext();

function CartContextProvider(props) {

  const [cart, setCart] = useState([])

  function addToCart(item, count) {
    // Verificar si el item existe en el carro, si existe solo modificar la cantidad
    const foundedItem = isInCart(item.id)
    if ( foundedItem === undefined ) {
      setCart([...cart, { ...item, count }])
    } else {
      setCart([...cart, { ...item, count }])
    }
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.count
    })
    return total
  }

  function removeItem(id){
    const newCart = cart.filter((element) => {
      return element.id !== id
    })
    setCart(newCart)
  }

  function isInCart(id) {
    return cart.find((element) => {
      return element.id === id
    })
  }

  function getTotalPrice() {
    let totalPrice = 0
    cart.forEach((item) => {
      return totalPrice += (item.price*item.count)
    })
    return totalPrice
  }

  function clearCart() {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, isInCart, removeItem, clearCart, getTotalPrice }}>
      {props.children}
    </cartContext.Provider>
  )
}

export { cartContext, CartContextProvider }
