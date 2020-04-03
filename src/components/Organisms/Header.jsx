import React,{ createRef } from 'react'
import { NavLink } from 'react-router-dom'
import PriveteMenu from '../Molecules/PriveteMenu'
import PublicMenu from '../Molecules/PublicMenu'

const menu = createRef()
const toggelMenu = ()=>menu.current.classList.toggle('show')
const Header = () => {
  
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <NavLink to="/">
            <img 
              className="main-logo" 
              src="https://ed.team/static/images/logo.svg" 
              alt="Logo" 
            />      
          </NavLink>
        </div>
        <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
          <nav className="main-menu" ref={menu} >
            {
              localStorage.getItem('token') 
              ? <PriveteMenu />
              : <PublicMenu />
            }
          </nav>          
          <div 
            className="main-menu-toggle to-l"
            onClick={()=>toggelMenu()}
          >
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
