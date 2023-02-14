import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/CartReducer'
import { ADD_TO_CART } from '../actions'
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 1000,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addToCart = (id, color, quantity, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, quantity, product } })
  }
  const removeItem = (id) => {}
  const clearCart = () => {}
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
export const useCartContext = () => {
  return useContext(CartContext)
}
