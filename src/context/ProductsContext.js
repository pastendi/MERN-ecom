import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/productsReducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from '../actions'
import { products_url } from '../components/utils/constants'
import axios from 'axios'

const initialState = {
  isSidebarOpen: false,
  loading: false,
  error: false,
  products: [],
  featuredProducts: [],
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
  const fetchProducts = async (products_url) => {
    dispatch({ type: REQUEST_BEGIN })
    try {
      const response = await axios.get(products_url)
      const products = response.data
      dispatch({ type: REQUEST_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: REQUEST_ERROR })
    }
  }
  React.useEffect(() => {
    fetchProducts(products_url)
  }, [])
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
