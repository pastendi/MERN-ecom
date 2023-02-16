import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style/UserOption'
import { useProductsContext } from '../../context/ProductsContext'
import { useCartContext } from '../../context/CartContext'
import { useUserContext } from '../../context/UserContext'

const UserOption = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items } = useCartContext()
  const { loginWithRedirect, logout, myUser } = useUserContext()
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn' onClick={() => closeSidebar()}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='user-btn'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUser />
        </button>
      ) : (
        <button type='button' className='user-btn' onClick={loginWithRedirect}>
          Login <FaUser />
        </button>
      )}
    </Wrapper>
  )
}

export default UserOption
