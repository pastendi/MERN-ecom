import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style/UserOption'
import { useProductsContext } from '../../context/ProductsContext'

const UserOption = () => {
  const { closeSidebar } = useProductsContext()
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn' onClick={() => closeSidebar()}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button type='button' className='user-btn' onClick={() => closeSidebar()}>
        Login <FaUser />
      </button>
    </Wrapper>
  )
}

export default UserOption
