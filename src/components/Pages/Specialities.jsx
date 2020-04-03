import React, { useEffect, Fragment } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllSpecilities } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organisms/Card'

const Specialities = ({match,specialities}) => {
  useEffect(()=>{
    store.dispatch(getAllSpecilities())
  },[match])

  console.log(specialities)
  return (
    <Fragment>
      <Banner
        color="accent-color-alt"
        image={{
          src:"https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=CoFX3ymSERXjLBqj1xZFks$daE2N3K4ZzOUsqbU5sYtLFyugW8xRdQji_k01H1Ea6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
          alt:"Banner especialidades"    
        }}
        title="Nuestras especialidades"
        subtitle="Este plantel docente está altamente  calificado para tu enseñanza online."
      />
      {
        specialities &&        
        <main className="ed-grid m-grid-5 row-gap">
        {
          specialities.map(e=>(
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              picture={e.picture}
              path="especialidades"
            />
          ))
        }
        </main>
      }
    </Fragment>
  )
}
const mapStateProps=state=>({
  specialities:state.specialityReducer.specialities
})
export default connect(mapStateProps,{})(Specialities)
