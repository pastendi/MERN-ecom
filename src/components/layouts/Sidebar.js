import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { FaTimes } from 'react-icons/fa'
import UserOption from '../others/UserOption'
import { Wrapper } from '../../style/Sidebar'
import { useProductsContext } from '../../context/ProductsContext'
import { useUserContext } from '../../context/UserContext'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  const { myUser } = useUserContext()
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
          {myUser && (
            <li onClick={() => closeSidebar()}>
              <Link to='/checkout'>Checkout</Link>
            </li>
          )}
        </ul>
        <UserOption />
      </aside>
    </Wrapper>
  )
}

export default Sidebar
