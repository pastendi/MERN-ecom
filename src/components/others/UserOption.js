import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style/UserOption'

const UserOption = () => {
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button type='button' className='user-btn'>
        Login <FaUser />
      </button>
    </Wrapper>
  )
}

export default UserOption
