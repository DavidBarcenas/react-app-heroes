import React from 'react'

export const Navbar = () => {
  return (
    <nav className="teal">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Heroes</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Marvel</a></li>
          <li><a href="badges.html">DC</a></li>
          <li><a href="collapsible.html">Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}
