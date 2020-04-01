import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Specialities from './Pages/Specialities'
import Speciality from './Pages/Speciality'
import Teaches from './Pages/Teaches'
import Course from './Pages/Course'
import Courses from './Pages/Courses'
import Fragment from './Pages/Fragment'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'
import Register from './Pages/Register'
import Protected from './Routes/Protected'
import Public from './Routes/Public'
import Header from './Organisms/Header'

const RoutesPage = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Protected path="/" exact component={Home} />
        <Protected path="/especialidades" exact component={Specialities} />
        <Protected path="/especialidades/:id" component={Speciality} />
        <Protected path="/cursos" exact component={Courses} />
        <Protected path="/cursos/:id" component={Course} />
        <Protected path="/profesores" exact component={Teaches} />
        <Protected path="/clase/:id" component={Fragment} />
        
        <Public path="/login" exact component={Login} />
        <Public path="/registro" exact component={Register} />

        <Route component = {Page404} />
      </Switch>
    </Router>
  )
}

export default RoutesPage
