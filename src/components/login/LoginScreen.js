import React from 'react'

export const LoginScreen = ({ history }) => {

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={ handleClick }>Login</button>
    </div>
  )
}
