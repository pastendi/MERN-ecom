import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { FaBars } from 'react-icons/fa'
import { Wrapper } from '../../style/Navbar'
import UserOption from '../others/UserOption'
import { useProductsContext } from '../../context/ProductsContext'
import { useUserContext } from '../../context/UserContext'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='company logo' />
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => openSidebar()}
          >
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
          {myUser && (
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          )}
        </ul>
        <div className='user-option'>
          <UserOption />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
