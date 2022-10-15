import React, { createContext, useState } from 'react'

const cartContext = createContext();

function CartContextProvider(props) {

  const [cart, setCart] = useState([])

  function addToCart(item, count) {
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
    return cart.filter((element) => {
      return element.id !== id
    })
  }

  function isInCart(id) {
    return cart.find((element) => {
      return element.id === id
    })
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, isInCart, removeItem }}>
      {props.children}
    </cartContext.Provider>
  )
}

export { cartContext, CartContextProvider }
