import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/productsReducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REQUEST_BEGIN,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_SINGLE_PRODUCT_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { products_url } from '../components/utils/constants'
import axios from 'axios'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  single_product_error: false,
  products: [],
  featuredProducts: [],
  selectedProduct: {},
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  const fetchProducts = async (url) => {
    dispatch({ type: REQUEST_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data
      dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: REQUEST_PRODUCTS_ERROR })
    }
  }
  const fetchSingleProduct = async (url) => {
    dispatch({ type: REQUEST_BEGIN })
    try {
      const response = await axios.get(url)
      const product = response.data
      console.log(product)
      dispatch({ type: REQUEST_SINGLE_PRODUCT_SUCCESS, payload: product })
    } catch (error) {
      dispatch({ type: REQUEST_SINGLE_PRODUCT_ERROR })
    }
  }
  React.useEffect(() => {
    fetchProducts(products_url)
  }, [])
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
