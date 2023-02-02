import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  REQUEST_BEGIN,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from '../actions'
const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === REQUEST_BEGIN) {
    return { ...state, loading: true }
  }
  if (action.type === REQUEST_SUCCESS) {
    const featuredProducts = action.payload.filter((x) => x.featured === true)
    return {
      ...state,
      loading: false,
      products: action.payload,
      featuredProducts,
    }
  }
  if (action.type === REQUEST_ERROR) {
    return { ...state, loading: false, error: true }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default productsReducer
