import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/FilterReducer'
import { useProductsContext } from './ProductsContext'
import { LOAD_PRODUCTS } from '../actions'
const initialState = {
  allProducts: [],
  filteredProducts: [],
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
