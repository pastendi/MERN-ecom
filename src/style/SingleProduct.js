import styled from 'styled-components'

export const Wrapper = styled.div`
  .product-center {
    display: grid;
    gap: 4rem;
  }
  .price {
    color: var(--primary-700);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.2rem;
    }
  }
`
