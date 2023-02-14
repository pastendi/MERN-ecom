import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
const Quantity = ({ increase, decrease, quantity }) => {
  return (
    <Wrapper className='quantity'>
      <button type='button' className='quatity-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2>{quantity}</h2>
      <button type='button' className='quatity-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default Quantity
