import '@testing-library/jest-dom';
import React from 'react'
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';


describe('<LoginScreen /> testing', () => {

  const contextValue = {
    dispatch: jest.fn()
  }
  
  const history = {
    replace: jest.fn()
  }

  afterEach(() =>{
    jest.clearAllMocks()
  })
  
  test('should render correctly', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen />
      </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should run dispatch and navigation', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen history={history} />
      </AuthContext.Provider>
    )
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick()

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Daveepro'
      }
    })
    expect(history.replace).toHaveBeenCalledWith('/')
    
    localStorage.setItem('lastPath', '/dc');
    handleClick()



    expect(history.replace).toHaveBeenCalledWith('/dc')
  })
  
})
