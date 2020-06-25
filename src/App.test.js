import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'
import { isElementOfType } from 'react-dom/test-utils';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('P in App', () => {

  it('Check if first P is CourseIt', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find('#courseit-test').text()
  
    expect(text).toBe('CourseIt')
  })
  
  it('App has only one P', () => {
    const wrapper = shallow(<App />)
    const p = wrapper.find('p')
    expect(p).toHaveLength(2)
  })
})