import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { single_product_url } from '../components/utils/constants'
import { formatPrice } from '../components/utils/formatPrice'
import { Error, Loading } from '../components/others'
import { Wrapper } from '../style/SingleProduct'
import { useProductsContext } from '../context/ProductsContext'
const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { selectedProduct, loading, single_product_error, fetchSingleProduct } =
    useProductsContext()
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`)
  }, [])
  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [single_product_error])
  if (loading) return <Loading />
  if (single_product_error) return <Error />
  return <Wrapper>Single Product : {selectedProduct.name}</Wrapper>
}

export default SingleProduct
