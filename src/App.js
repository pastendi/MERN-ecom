import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components/layouts'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  NotFound,
  PrivateRoute,
  AuthWrapper,
} from './pages'
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProduct />} />
            <Route path='cart' element={<Cart />} />
            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
