import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

  const { id } = useParams();
  const hero = getHeroesById(id);

  if(!hero) { return <Redirect to='/' /> }


  const handleReturn = () => {
    if(history.length <= 2) {
      history.push('/')
    } else {
      history.goBack();
    }
  }
  return (
    <div>
      <h1>{hero.superhero}</h1>
      <button onClick={handleReturn}>Regresar</button>
    </div>
  )
}
