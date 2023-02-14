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
const FilterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let prices = action.payload.map((p) => p.price)
    let maxPrice = Math.max(...prices)
    let minPrice = Math.min(...prices)
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
        min_price: minPrice,
      },
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
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state
    const { text, color, category, company, price, shipping } = state.filters
    let filterResult = [...allProducts]
    if (text) {
      filterResult = filterResult.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      )
    }
    if (category !== 'all') {
      filterResult = filterResult.filter(
        (product) => product.category === category
      )
    }
    if (company !== 'all') {
      filterResult = filterResult.filter(
        (product) => product.company === company
      )
    }
    if (color !== 'all') {
      filterResult = filterResult.filter((product) =>
        product.colors.find((c) => c === color)
      )
    }
    if (shipping) {
      filterResult = filterResult.filter((product) => product.shipping === true)
    }
    filterResult = filterResult.filter((product) => product.price <= price)

    return { ...state, filteredProducts: filterResult }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
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
