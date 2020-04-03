import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({color,title,image,subtitle,home,poster,courseBanner,speciality,info}) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className="ed-grid">
      <div>
        <img 
          src={image.src} 
          alt ={image.alt} 
          className="main-banner__img" 
        />
        {
          home
          ?
            <div className="ed-grid m-grid-2">
              <div className="main-banner__data">
                <h1 className="main-banner_title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/cursos" className="button accent-color">Var Cursos</Link>
              </div>
              <div className="img-container s-ratio-16-9">                
                <img 
                  src={poster} 
                  alt ="Curso actual" 
                  //className="main-banner__img" 
                />
              </div>
            </div>
          :
            courseBanner
            ?
              <div className="ed-grid m-grid-3">
                <div className="main-banner__data m-cols-2">
                  <h1 className="main-banner__title s-mb-0">{title}</h1>
                  <p className="s-opacity-8">{subtitle}</p>
                  <p>{info}</p>
                  {
                    speciality && 
                    <p>Éste curso forma parte de la especialidad <Link to="/especialidades">{speciality}</Link></p>
                  }
                </div>
                <div className="img-container s-ratio-16-9 m-cols-1">                
                  <img 
                    src={poster} 
                    alt ="Curso actual" 
                  />
                </div>
              </div>            
            :
              <div className="main-banner__data s-center">
                <h1 className="main-banner_title">{title}</h1>
                <p>{subtitle}</p>
              </div>
        }
      </div>
    </div>
  </div>  
)

export default Banner
