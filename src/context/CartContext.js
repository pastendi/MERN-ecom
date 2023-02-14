import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/CartReducer'
import { ADD_TO_CART } from '../actions'
const initialState = {
  cart: [],
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
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
export const useCartContext = () => {
  return useContext(CartContext)
}
