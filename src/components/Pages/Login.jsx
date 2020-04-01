import React from 'react'
import { Link } from 'react-router-dom'
//import Axios from 'axios'

const authentification = e=>{
  e.preventDefault()

  localStorage.setItem('token',"valor")

  window.location="/"
  //Habitilitar cuando la api funcione de petición de token
  /*

  const form = e.target

  const data={
    "email":form.email.value,
    "password":form.password.value
  }

  Axios.post('http://api-edteam.alejogs4.now.sh/login',data)
  .then(resp=>{
    localStorage.setItem('token',resp.data.token)
    window.location="/"
  })
  .catch(e=>console.error(e))
  */
}
const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar Sesión</h1>
        <form onSubmit={authentification.bind()}>
            <div className="form__item">
              <label htmlFor="email">
                Correo Electrónico
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
          <p>¿No tienes cuenta de usuario? <Link to="/registro">Registrate</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
