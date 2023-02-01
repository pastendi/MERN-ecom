import React from 'react'
import { Link } from 'react-router-dom'
import welcome from '../../assets/welcome.jfif'
import { Wrapper } from '../../style/Welcome'

const Welcome = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor voluptas cumque unde, necessitatibus placeat quidem dolorem
          sunt? Numquam distinctio dolores hic! Voluptas totam deserunt
          explicabo voluptates! Eos, assumenda! Itaque?
        </p>
        <Link to='/products' className='btn shop-now-btn'>
          Shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={welcome} alt='welcoming pic' className='img welcome-img' />
      </article>
    </Wrapper>
  )
}

export default Welcome
