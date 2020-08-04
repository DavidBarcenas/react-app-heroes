import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { id } = useParams();
  const hero = getHeroesById(id);

  if(!hero) { return <Redirect to='/' /> }

  return (
    <div>
      <h1>{hero.superhero}</h1>
    </div>
  )
}
