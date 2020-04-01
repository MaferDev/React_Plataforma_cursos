import React from 'react'
import { Link } from 'react-router-dom'
const registration = e=>{
  e.preventDefault()
  //Aqui va la comunicación al servidor para registrarse
  alert("Usuario Registrado")
  window.location = "/login"
}
const Register = () => {
  return (
    <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear Cuenta</h1>
      <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="name">
              Nombre completo
              <input type="text" id="name" name="name" placeholder="Ingrese su Nombre" required />                
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" id="email" name="email" placeholder="Ingrese su Email" required />                
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Iniciar Sesión" />
          </div>
      </form>      
      <div className="center">
      <p>¿Ya tienes cuenta de usuario? <Link to="/login">Inicia Sesión</Link></p>
    </div>
    </div>
  </div>
  )
}

export default Register
