import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/FilterReducer'
import { useProductsContext } from './ProductsContext'
import {
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
const initialState = {
  allProducts: [],
  filteredProducts: [],
  isGridView: true,
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
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
  const changeFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    // since categories are displayed in button and text from button cannot be extracted as above
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        setListView,
        setGridView,
        changeFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
