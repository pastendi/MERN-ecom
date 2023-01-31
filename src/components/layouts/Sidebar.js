import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/NavLinks'
import { FaTimes } from 'react-icons/fa'
import UserOption from '../others/UserOption'
import { Wrapper } from '../../style/Sidebar'

const Sidebar = () => {
  const isOpen = true
  return (
    <Wrapper>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='company logo' className='logo' />
          <button className='close-btn' type='button'>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        </ul>
        <UserOption />
      </aside>
    </Wrapper>
  )
}

export default Sidebar
