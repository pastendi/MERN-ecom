import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/FilterReducer'
import { useProductsContext } from './ProductsContext'
import {
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  SET_LISTVIEW,
  SET_GRIDVIEW,
} from '../actions'
const initialState = {
  allProducts: [],
  filteredProducts: [],
  isGridView: true,
  sort: 'price-lowest',
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value })
  }
  const setGridView = (option) => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = (option) => {
    dispatch({ type: SET_LISTVIEW })
  }
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])
  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, setListView, setGridView }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
