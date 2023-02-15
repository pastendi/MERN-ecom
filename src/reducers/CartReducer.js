import { ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART } from '../actions'
const CartReducer = (state, action) => {
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((i) => i.id !== action.payload)
    return { ...state, cart: newCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === ADD_TO_CART) {
    const { id, color, quantity, product } = action.payload
    const existingItem = state.cart.find((i) => i.id === id + color)
    if (existingItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newQuantity = cartItem.quantity + quantity
          if (newQuantity > cartItem.max) {
            newQuantity = cartItem.max
          }
          return { ...cartItem, quantity: newQuantity }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}
export default CartReducer
