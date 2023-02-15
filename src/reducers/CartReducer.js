import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_QUANTITY,
  CART_TOTALS,
} from '../actions'
const CartReducer = (state, action) => {
  if (action.type === CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { quantity, price } = cartItem
        total.total_items += quantity
        total.total_amount += quantity * price
        return total
      },
      { total_items: 0, total_amount: 0 }
    )
    return { ...state, total_items, total_amount }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((i) => i.id !== action.payload)
    return { ...state, cart: newCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === TOGGLE_CART_ITEM_QUANTITY) {
    const { id, value } = action.payload
    const newCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newQuantity = item.quantity + 1
          if (newQuantity > item.max) {
            newQuantity = item.max
          }
          return { ...item, quantity: newQuantity }
        }
        if (value === 'dec') {
          let newQuantity = item.quantity - 1
          if (newQuantity < 1) {
            newQuantity = 1
          }
          return { ...item, quantity: newQuantity }
        }
        return item
      } else {
        return item
      }
    })
    return { ...state, cart: newCart }
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
