import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

const initialState = {
  logged: false
}

describe('<authReducer /> testing', () => {
  test('should return default state', () => {
    const state = authReducer(initialState, {})
    expect(state).toEqual({logged: false})
  })

  test('should authenticate and set the username', () => {
    const payload = {
      type: types.login,
      payload: {
        name: 'David',
      }
    }
    const state = authReducer(initialState, payload)
    expect(state).toEqual({
      logged: true,
      name: 'David'
    })
  })
  
  test('should deauthenticate and delete the username', () => {
    const state = authReducer({
      logged: true,
      name: 'David'
    }, {type: types.logout})
    expect(state).toEqual({logged: false})
  })
  
})
