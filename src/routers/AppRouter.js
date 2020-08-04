import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { HeroesRoutes } from './HeroesRoutes'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginScreen}/>
        <Route path='/' component={HeroesRoutes}/>
      </Switch>
    </Router>
  )
}
