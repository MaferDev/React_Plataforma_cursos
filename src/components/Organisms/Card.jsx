import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,name,picture,path:patch }) => (

  <article className="card s-border">
    <div className="img-container s-ratio-16-9">
      <Link to={`/${patch}/${id}`}>
        <img src={picture} alt={name} />
      </Link>
    </div>
    <div className="card__data s-pyx-2">
    <h3 className="t4 center">{name}</h3>
    </div>
  </article>  
)
export default Card
