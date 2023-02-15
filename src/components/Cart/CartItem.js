import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'
import { Wrapper } from '../../style/CartItem'
import Quantity from '../others/Quantity'
import { formatPrice } from '../utils/formatPrice'

const CartItem = ({ id, image, name, color, price, quantity }) => {
  const { removeItem } = useCartContext()
  //remaining
  const increase = () => {}
  const decrease = () => {}
  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            Color: <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <Quantity quantity={quantity} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * quantity)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

export default CartItem
