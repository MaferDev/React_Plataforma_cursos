import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicMenu = () => (  
  <ul>
    <li><NavLink exact to="/login">Login</NavLink></li>
    <li><NavLink exact to="/registro">Registro</NavLink></li>
  </ul>
)

export default PublicMenu
