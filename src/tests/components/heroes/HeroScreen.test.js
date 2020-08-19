import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('<HeroScreen /> testing', () => {
  global.scrollTo = jest.fn()

  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  test('should show redirect component if there are no arguments', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    )
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.find('Redirect').exists()).toBeTruthy()
  })

  test('should show a hero if the parameter exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:id" component={HeroScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('.hero__wrapper').exists()).toBeTruthy()
  })
  
  test('it should return to the previous screen [Push]', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:id" component={ () => <HeroScreen history={historyMock} /> } />
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })

  test('it should return to the previous screen [goBack] ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:id" component={ () => <HeroScreen history={historyMock} /> } />
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')();
    expect(historyMock.goBack).toHaveBeenCalled()
    expect(historyMock.push).not.toHaveBeenCalled()
  })
  
})
