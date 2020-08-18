import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { HeroesRoutes } from './HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const AppRouter = () => {

  const {user: {logged}} = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/login' isAuth={logged} component={LoginScreen}/>
        <PrivateRoute path='/' isAuth={logged} component={HeroesRoutes}/>
      </Switch>
    </Router>
  )
}
