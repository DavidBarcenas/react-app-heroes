import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({hero}) => {
  return (
    <div>
      <img src={`./assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
      <h3>{hero.superhero}</h3>
      <Link to={`/hero/${hero.id}`}>Más...</Link>
    </div>
  )
}
