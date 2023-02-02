import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../style/NotFound'

const Error = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          Back to home
        </Link>
      </section>
    </Wrapper>
  )
}

export default Error
