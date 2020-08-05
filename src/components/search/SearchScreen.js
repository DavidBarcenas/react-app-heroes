import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

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
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Find your hero" name="search" onChange={handleInputChange} value={values.search} autoComplete="off" />
        <button type="submit">Search</button>
      </form>

      <div>
        <h4>Results</h4>
        {
          heroesFiltered.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))
        }
      </div>
    </div>
  )
}
