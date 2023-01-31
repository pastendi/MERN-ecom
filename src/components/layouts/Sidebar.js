import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/NavLinks'
import { FaTimes } from 'react-icons/fa'
import UserOption from '../others/UserOption'
import { Wrapper } from '../../style/Sidebar'
import { useProductsContext } from '../../context/ProductsContext'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='company logo' className='logo' />
          <button
            className='close-btn'
            type='button'
            onClick={() => closeSidebar()}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id} onClick={() => closeSidebar()}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          <li onClick={() => closeSidebar()}>
            <Link to='/checkout'>Checkout</Link>
          </li>
        </ul>
        <UserOption />
      </aside>
    </Wrapper>
  )
}

export default Sidebar
