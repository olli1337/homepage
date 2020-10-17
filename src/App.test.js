import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

/*
  Use shallow due to having TSX component which crashes Jest!
*/

it('Render App without crashing.', () => {
  shallow(<App />);
});

it('Landing page renders introduction successfully.', () => {
  const wrapper = shallow(<App />);
  const introduction = <div style={{ display: 'flex', backgroundColor: 'white' }}>I do programming, IT architecture and DevOps stuff</div>;
  expect(wrapper.contains(introduction)).toEqual(true);
});
