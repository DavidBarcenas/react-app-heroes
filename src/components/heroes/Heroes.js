import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const Heroes = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

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
