import React, { Fragment, useEffect } from 'react'
import Banner from '../Organisms/Banner'
import Publication from '../Organisms/Publication'
import store from '../../redux/store'
import { getAllPosts, getAllCourses } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organisms/Card'

const Home = ({posts,courses}) =>{
  useEffect(()=>{
    store.dispatch(getAllPosts())
    store.dispatch(getAllCourses())
  },[])
  return(
    <Fragment>
      <Banner
        color="dark-color"
        image="https://static.brusheezy.com/system/resources/previews/000/017/117/non_2x/another-grungy-texture-photoshop-textures.jpg"
        title="Bienvenido a la plataforma de cursos hecha con ReactJS y Redux. Comienza hoy mismo a aprender y capacitate para ser mejor cada día."
        subtitle="El equipo se encargo de utilizar las buenas practicas para poder desarrollar ésta plataforma"
        poster="https://ichef.bbci.co.uk/news/410/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png"
        home
      />
      <main className="ed-grid m-grid-4">
        <div className="m-cols-4">
          <h2>Últimos cursos</h2>
          {
            courses &&
            <main className="ed-grid m-grid-5">
            {
              courses.slice(courses.length-5).map(c=>(
                <Card
                  key={c.id}
                  id={c.id}
                  name={c.name}
                  picture={c.picture}
                  path = "cursos"
                />
              ))
            }
            </main>
          }            
        </div>
        <div className="l-section s-cols-3">
          <h2>Ultimas publicaciones</h2>
          {
            posts 
            ? <div className="">
              {
                posts.map(p=>(
                  <Publication 
                    key={p.id}
                    title={p.title}
                    author={p.author}
                    date={p.fecha}
                    content={p.content} 
                  />
                ))
              }
              </div>
            :
            <p className="">No existen publicaciones</p>
              
          }
        </div>  
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>ReactJs</span></li>
            <li><span>React Native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
            <li><span>SASS</span></li>
          </ul>
        </div>  
      </main>
    </Fragment>
  )
}
const mapStateProps=state=>({
  posts:state.postReducer.posts,
  courses:state.courseReducer.courses
})
export default connect(mapStateProps,{})(Home)
