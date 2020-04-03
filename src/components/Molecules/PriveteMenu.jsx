import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToSesion = e => {
  localStorage.removeItem('token')
  window.location="/login"
}
const PriveteMenu = () => (  
    <ul>
      <li><NavLink exact to="/">Inicio</NavLink></li>
      <li><NavLink to="/especialidades">Especialidades</NavLink></li>
      <li><NavLink to="/cursos">Cursos</NavLink></li>
      <li><NavLink to="/profesores">Profesores</NavLink></li>
      <li><span onClick={()=>removeToSesion()}>Cerrar Sesión</span></li>
    </ul>
)
export default PriveteMenu
