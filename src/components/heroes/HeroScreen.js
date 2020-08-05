import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';
import './heroScreen.css'

export const HeroScreen = ({history}) => {
  window.scrollTo(0,0);

  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);

  if(!hero) { return <Redirect to='/' /> }


  const handleReturn = () => {
    if(history.length <= 2) {
      history.push('/')
    } else {
      history.goBack();
    }
  }
  return (
    <div className="hero__wrapper">
      <div className="hero__img animate__animated animate__zoomIn">
        <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero}/>
      </div>
      <article className="hero__data animate__animated animate__fadeInRight">
        <button className="btn red" onClick={handleReturn}>Back</button>
        <h1 className="hero__title">{hero.superhero}</h1>
      </article>
    </div>
  )
}
