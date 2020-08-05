import React from 'react'
import { useForm } from '../../hooks/useForm'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

  const {values, handleInputChange} = useForm({
    search: ''
  })

  const heroesFiltered = heroes;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(values)
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
