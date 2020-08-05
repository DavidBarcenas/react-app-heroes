import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className="main__nav red">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo">Heroes</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink activeClassName="active" to="/marvel">Marvel</NavLink></li>
          <li><NavLink activeClassName="active" to="/dc">DC</NavLink></li>
          <li><NavLink activeClassName="active" to="/search">Search</NavLink></li>
          <li><NavLink activeClassName="active" to="/login">Logout</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
