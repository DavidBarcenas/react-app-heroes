import React, { useContext } from 'react'
import './login.css'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext)

  const handleClick = () => {
    // history.push('/')
    dispatch({
      type: types.login,
      payload: {
        name: 'Daveepro'
      }
    })

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
