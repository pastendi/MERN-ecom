import styled from 'styled-components'

export const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  text-align: center;
  span {
    color: var(--primary-300);
  }
  h5 {
    color: var(--white);
    margin: 0.1rem;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`
