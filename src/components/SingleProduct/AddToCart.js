import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa'
import { Wrapper } from '../../style/AddToCart'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const increaseAmount = () => {
    setAmount((amount) => {
      let increasedAmount = amount + 1
      if (increasedAmount > stock) {
        increasedAmount = stock
      }
      return increasedAmount
    })
  }

  const decreaseAmount = () => {
    setAmount((amount) => {
      let decreasedAmount = amount - 1
      if (decreasedAmount < 1) {
        decreasedAmount = 1
      }
      return decreasedAmount
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
      <div className='amounts'>
        <button type='button' onClick={decreaseAmount}>
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button type='button' onClick={increaseAmount}>
          <FaPlus />
        </button>
      </div>
      <Link to='/cart' className='btn'>
        Add to cart
      </Link>
    </Wrapper>
  )
}

export default AddToCart
