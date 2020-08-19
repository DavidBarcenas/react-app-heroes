import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { HeroesRoutes } from '../../routers/HeroesRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('<HeroesRoutes /> testing', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }
  
  test('should render correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <HeroesRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
  })
  

})
