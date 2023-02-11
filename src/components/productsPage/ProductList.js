import React from 'react'
import { useFilterContext } from '../../context/FilterContext'
import { GridView, ListView } from '../productsPage'

const ProductList = () => {
  const { filteredProducts, showGridView } = useFilterContext()
  if (filteredProducts.length < 1)
    return <h5>Sorry, no produts matched you searches...</h5>
  if (showGridView) {
    return <GridView products={filteredProducts} />
  } else {
    return <ListView products={filteredProducts} />
  }
}

export default ProductList
