import React from 'react'
import {
  Welcome,
  FeaturedProducts,
  Services,
  Contacts,
} from '../components/homepage'

const Home = () => {
  return (
    <>
      <Welcome />
      <FeaturedProducts />
      <Services />
      <Contacts />
    </>
  )
}

export default Home
