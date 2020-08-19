import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('<PrivateRoute /> testing', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn();
  
  test('should show component if authenticated and localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuth = {true}
          component = {() => (<span>Hello</span>)}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })


  test('should block the component if it is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuth = {false}
          component = {() => (<span>Hello</span>)}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(false)
  })
  
  
})
