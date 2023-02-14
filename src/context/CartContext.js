import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/CartReducer'
const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 1000,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}
export const useCartContext = () => {
  return useContext(CartContext)
}
