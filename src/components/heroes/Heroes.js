import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const Heroes = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div>
      {
        heroes.map(hero => (
          <div key={ hero.id }>
            { hero.superhero }
          </div>
        ))
      }
    </div>
  )
}
