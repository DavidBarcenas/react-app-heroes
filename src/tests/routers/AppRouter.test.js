import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('<AppRouter /> testing', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }
  
  test('should show the login if you are not authenticated', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should show marvel component if autenticated', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Davee'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper.find('.main__nav').exists()).toBeTruthy()
  })
  

})
