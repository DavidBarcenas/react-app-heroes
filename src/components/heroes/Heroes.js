import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const Heroes = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div>
      {
        heroes.map(hero => (
          <HeroCard hero={hero} key={ hero.id } />
        ))
      }
    </div>
  )
}
