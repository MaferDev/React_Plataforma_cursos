import React, { useEffect, Fragment } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import {getAllTeachers} from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Teacher from '../Organisms/Teacher'

const Teaches = ({match,teachers}) => {  
  useEffect(()=>{  
    store.dispatch(getAllTeachers())
  },[match])

  console.log(teachers)
  return (
    <Fragment>
      <Banner
        color="third-color"
        image={{
          src:"https://sanpedro.edu.pe/wp-content/uploads/2019/08/Profesores-para-SP.jpg",
          alt:"Banner profesores"    
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente  calificado para tu enseñanza online."
      />
      {
        teachers &&
          <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
            { 
              teachers.map(t=>(
                <Teacher
                  key={t.id}
                  name = {t.name}
                  picture={t.picture}
                  country={t.country}
                />
              ))
            }
          </main>  
      }    
    </Fragment>
  )
}
const mapStateProps = state =>({
  teachers:state.teacherReducer.teachers
})
export default connect(mapStateProps,{})(Teaches)
