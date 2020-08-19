import '@testing-library/jest-dom';
import React from 'react'
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('<SearchScreen /> testing', () => {
  
  test('should render correcly with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen}/>
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
  }) 
})
