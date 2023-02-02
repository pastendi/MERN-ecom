import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--primary-100);
  min-height: calc(100vh - 10rem);
  padding: 0 auto;
  h1 {
    font-size: 6rem;
    font-weight: bolder;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`
