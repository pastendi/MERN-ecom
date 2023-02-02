import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { formatPrice } from '../utils/formatPrice'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style/Product'
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

export default Product
