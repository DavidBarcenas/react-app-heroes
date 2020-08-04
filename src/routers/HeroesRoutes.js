import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/heroe/:id" component={ HeroScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
