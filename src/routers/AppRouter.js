import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { HeroesRoutes } from './HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const AppRouter = () => {

  const {user: {logged}} = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginScreen}/>
        <PrivateRoute path='/' isAuth={logged} component={HeroesRoutes}/>
      </Switch>
    </Router>
  )
}
