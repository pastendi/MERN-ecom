import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartColumns from './CartColumns'
import { useCartContext } from '../../context/CartContext'
import CartTotal from './CartTotal'
const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          Continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--primary-500);
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--black);
  }
`
export default CartContent
