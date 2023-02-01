import styled from 'styled-components'

export const Wrapper = styled.section`
  min-height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .img-container {
      display: block;
      position: relative;
    }
    .shop-now-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .welcome-img {
      height: 400px;
      border-radius: var(--borderRadius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--primary-200);
      bottom: 0%;
      left: -5%;
      bottom: -5%;
      z-index: -1;
      border-radius: var(--borderRadius);
    }
  }
`
