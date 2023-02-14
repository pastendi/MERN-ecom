import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { Wrapper } from '../../style/AddToCart'
import { useCartContext } from '../../context/CartContext'
import Quantity from '../others/Quantity'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  const { addToCart } = useCartContext()
  const [mainColor, setMainColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => {
    setQuantity((quantity) => {
      let increasedQuantity = quantity + 1
      if (increasedQuantity > stock) {
        increasedQuantity = stock
      }
      return increasedQuantity
    })
  }

  const decreaseQuantity = () => {
    setQuantity((quantity) => {
      let decreasedQuantity = quantity - 1
      if (decreasedQuantity < 1) {
        decreasedQuantity = 1
      }
      return decreasedQuantity
    })
  }
  return (
    <Wrapper>
      <div className='colors'>
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  color === mainColor ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {color === mainColor && <FaCheck />}
              </button>
            )
          })}
        </div>
      </div>
      <Quantity
        increase={increaseQuantity}
        decrease={decreaseQuantity}
        quantity={quantity}
      />
      <Link
        to='/cart'
        className='btn'
        onClick={() => addToCart(id, mainColor, quantity, product)}
      >
        Add to cart
      </Link>
    </Wrapper>
  )
}

export default AddToCart
