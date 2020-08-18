import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext)
  const history = useHistory()

  const handleLogout = () => {

    dispatch({
      type: types.logout
    })

    history.replace('/login')
  }

  return (
    <nav className="main__nav red">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo">Heroes</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink activeClassName="active" to="/marvel">Marvel</NavLink></li>
          <li><NavLink activeClassName="active" to="/dc">DC</NavLink></li>
          <li><NavLink activeClassName="active" to="/search">Search</NavLink></li>
          <li className="activeUser">{user.name}</li>
          <li><button className="waves-effect waves-light btn" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  )
}
