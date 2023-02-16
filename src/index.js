import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/ProductsContext'
import { FilterProvider } from './context/FilterContext'
import { CartProvider } from './context/CartContext'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './context/UserContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-07d4zmy0tqt4towe.us.auth0.com'
      clientId='uGRysyUIknovCfpNbRCEi48c7QHw5Zmu'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
)
