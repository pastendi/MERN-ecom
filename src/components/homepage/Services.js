import React from 'react'
import { Wrapper } from '../../style/Services'
import { servicesList } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>Our services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quod
            eos explicabo id maxime eius eveniet totam odit aliquid, enim
            nesciunt dicta, et ut error illo assumenda quisquam fuga est.
          </p>
        </article>
        <div className='services-center'>
          {servicesList.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services
