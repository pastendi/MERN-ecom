import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--grey-900);
    font-size: 1.5rem;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: red;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.65rem;
    font-weight: bold;
    color: var(--white);
    padding: 3px;
  }
  .user-btn {
    display: flex;
    border: transparent;
    align-items: center;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--grey-900);
    letter-spacing: var(--letterSpacing);
    svg {
      margin-left: 5px;
    }
  }
`
