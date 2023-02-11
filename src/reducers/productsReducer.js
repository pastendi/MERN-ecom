import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REQUEST_BEGIN,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_SINGLE_PRODUCT_ERROR,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_SINGLE_PRODUCT_SUCCESS,
} from '../actions'
const ProductsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === REQUEST_BEGIN) {
    return { ...state, loading: true }
  }
  if (action.type === REQUEST_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter((x) => x.featured === true)
    return {
      ...state,
      loading: false,
      products_error: false,
      products: action.payload,
      featuredProducts,
    }
  }
  if (action.type === REQUEST_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      loading: false,
      single_product_error: false,
      selectedProduct: action.payload,
    }
  }
  if (action.type === REQUEST_SINGLE_PRODUCT_ERROR) {
    return { ...state, loading: false, single_product_error: true }
  }
  if (action.type === REQUEST_PRODUCTS_ERROR) {
    return { ...state, loading: false, products_error: true }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default ProductsReducer
