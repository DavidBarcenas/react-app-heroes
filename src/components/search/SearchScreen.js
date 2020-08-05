import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import './search.css'

export const SearchScreen = ({ history }) => {

  const location = useLocation()
  const {q = ''} = queryString.parse(location.search);

  const {values, handleInputChange} = useForm({
    search: ''
  })

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${values.search}`)
  }

  return (
    <div>
      <span className="title__section">Search</span>

      <form onSubmit={handleSearch} className="search__form">
        <input type="text" placeholder="Find your hero" name="search" onChange={handleInputChange} value={values.search} autoComplete="off" />
        <button type="submit" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></button>
      </form>

      <div className="search__wrapper--card">
        {
          heroesFiltered.map(hero => (
            <div className="search__results">
              <HeroCard key={hero.id} hero={hero} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
