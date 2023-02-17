import React from 'react'
import { Wrapper } from '../../style/FeaturedProducts'
import { useProductsContext } from '../../context/ProductsContext'
import Loading from '../others/Loading'
import Product from '../others/Product'
import Error from '../others/Error'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { featuredProducts, loading, error } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <div className='title'>
          <h2>Fetured product</h2>
          <div className='underline'></div>
        </div>
        <div className='featured'>
          {featuredProducts.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </div>
      </div>
      <Link to='/products' className='btn'>
        View more
      </Link>
    </Wrapper>
  )
}

export default FeaturedProducts
