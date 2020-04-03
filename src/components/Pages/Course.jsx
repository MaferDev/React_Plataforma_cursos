import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'

const Course = ({match,course}) => {
  useEffect(()=>{
    store.dispatch(getCourse(1))
  },[match])
  return (
    <Fragment>
    {
      course &&
      <Fragment>
        <Banner
          color="dark-color"
          title={course.name}
          subtitle={course.subtitle}
          info={course.information}
          image={{
            src:course.picture,
            alt:course.name
          }}
          poster={course.picture}
          speciality={course.data.specialities[0].name}
          courseBanner
        />
        <main className="ed-grid l-grid-10">
          <div className="lg-cols-7">
            <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block">
              <div>
                <h3 className="t4">¿Qué aprenderas?</h3>
                <ul dangerouslySetInnerHTML={{__html:course.you_learn}} />
              </div>
              <div>
                <h3 className="t4">Cónocimientos previos</h3>
                <ul dangerouslySetInnerHTML={{__html:course.requirements}} />
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <p>{course.level}</p>
              </div>
            </div>
            <h2>Temario del curso</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block">
              {
                course.data.classes.map(cl=>(
                  <div key={cl.class.id} className="course-class l-section">
                    <h3>{cl.class.title}</h3>
                    <p>{cl.class.description}</p>
                    <ul>
                      {
                        cl.subjects.map(s=>(
                          <li>{s.subject.title}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="lg-col-3">
              <h2 className="">Profesor</h2>
              <p>Beto Quiroga</p>
          </div>
        </main>
      </Fragment>
      }
    </Fragment>
  )
}
const mapStateToProps=state =>({
  course:state.courseReducer.course
})
export default connect(mapStateToProps,{})(Course)
