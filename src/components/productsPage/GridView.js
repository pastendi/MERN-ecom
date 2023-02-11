import React from 'react'
import styled from 'styled-components'
import Product from '../others/Product'

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  img {
    height: 175px;
  }
  .products {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default GridView
