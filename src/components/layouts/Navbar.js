import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/NavLinks'
import { FaBars } from 'react-icons/fa'
import { Wrapper } from '../../style/Navbar'
import UserOption from '../others/UserOption'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='company logo' />
          </Link>
          <button type='button' className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className='user-option'>
          <UserOption />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
