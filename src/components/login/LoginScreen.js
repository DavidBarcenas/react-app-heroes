import React from 'react'
import './login.css'

export const LoginScreen = ({ history }) => {

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div className="login__wrapper">
      <div className="login__box card">

      <img src="./assets/lgo.jpg" alt="MarvelDc" className="login__logo" />
      <button className="login__btn btn red waves-effect waves-light" onClick={ handleClick }>Login</button>
      </div>
    </div>
  )
}
