import {
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  SET_LISTVIEW,
  SET_GRIDVIEW,
} from '../actions'
const FilterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, isGridView: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, isGridView: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state
    let temp = [...filteredProducts]
    if (sort === 'price-lowest') {
      temp = temp.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      temp = temp.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      temp = temp.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === 'name-z') {
      temp = temp.sort((a, b) => b.name.localeCompare(a.name))
    }
    return { ...state, filteredProducts: temp }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default FilterReducer
