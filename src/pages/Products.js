import React, { useState } from 'react'
import styled from 'styled-components'
import { Filter, Sort, ProductList } from '../components/productsPage'

const Products = () => {
  const [isGridView, setIsGridView] = useState(true)
  return (
    <Wrapper className='page'>
      <div className='section-center products'>
        <Filter />
        <div>
          <Sort isGridView={isGridView} setIsGridView={setIsGridView} />
          <ProductList isGridView={isGridView} />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`
export default Products
