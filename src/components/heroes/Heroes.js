import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './heroes.css'

export const Heroes = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="heroes__wrapper">
      {
        heroes.map(hero => (
          <HeroCard hero={hero} key={ hero.id } />
        ))
      }
    </div>
  )
}
