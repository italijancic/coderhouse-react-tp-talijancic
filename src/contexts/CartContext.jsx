import React, { createContext, useState } from 'react'

const cartContext = createContext();

function CartContextProvider(props) {

  const [cart, setCart] = useState([])

  function addToCart(item, count) {
    // Verificar si el item existe en el carro, si existe solo modificar la cantidad
    setCart([...cart, { ...item, count }])
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

  // Add funciton to get total price
  function getTotalPrice() {
    let totalPrice = 0
    cart.forEach((item) => {
      return totalPrice += item.price
    })
    return totalPrice
  }

  // Add function to clear car
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
