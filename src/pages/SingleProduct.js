import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { single_product_url } from '../components/utils/constants'
import { formatPrice } from '../components/utils/formatPrice'
import { Error, Loading } from '../components/others'
import { Wrapper } from '../style/SingleProduct'
import { useProductsContext } from '../context/ProductsContext'
import ProductImages from '../components/SingleProduct/ProductImages'
import Stars from '../components/SingleProduct/Stars'
import AddToCart from '../components/SingleProduct/AddToCart'
const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { selectedProduct, loading, single_product_error, fetchSingleProduct } =
    useProductsContext()
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [single_product_error])
  if (loading) return <Loading />
  if (single_product_error) return <Error />
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = selectedProduct
  return (
    <Wrapper>
      <div className='section section-center page-100'>
        <Link to='/products' className='btn'>
          Back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <div className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU: </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={selectedProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleProduct
