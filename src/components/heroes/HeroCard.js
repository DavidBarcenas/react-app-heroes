import React from 'react'
import { Link } from 'react-router-dom'
import './heroCard.css'

export const HeroCard = ({hero}) => {
  return (
    <div className="herocard animate__animated animate__fadeIn">
      <Link to={`/hero/${hero.id}`}>
        <img src={`./assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
      </Link>
    </div>
  )
}
