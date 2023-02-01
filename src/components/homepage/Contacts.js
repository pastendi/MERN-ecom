import React from 'react'
import { Wrapper } from '../../style/Contacts'

const Contacts = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Shop now 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
            dolorem illo! In minima accusantium eaque earum praesentium
            laboriosam accusamus nam.
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='Enter email'
            />
            <textarea className='form-textarea' placeholder='Your message' />
            <button className='btn submit-btn' type='button'>
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contacts
