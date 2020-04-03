import React, { Fragment, useEffect } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organisms/Card'

const Courses = ({match,courses}) => {

  useEffect(()=>{
    store.dispatch(getAllCourses())
  },[match])

  return (
    <Fragment>
      <Banner
        color="dark-color"
        image={{
          src:"https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=CoFX3ymSERXjLBqj1xZFks$daE2N3K4ZzOUsqbU5sYtLFyugW8xRdQji_k01H1Ea6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
          alt:"Banner cursos"    
        }}
        title="Nuestros cursos"
        subtitle="Este plantel docente está altamente  calificado para tu enseñanza online."
      />
      {
        courses &&
        <main className="ed-grid m-grid-5 row-gap">
        {
          courses.map(c=>(
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
    </Fragment>
  )
}

const mapStateProps= state =>({
  courses:state.courseReducer.courses
})
export default connect(mapStateProps,{})(Courses)
