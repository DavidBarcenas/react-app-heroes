import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="teal">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Heroes</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/marvel">Marvel</Link></li>
          <li><Link to="/dc">DC</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </div>
    </nav>
  )
}
