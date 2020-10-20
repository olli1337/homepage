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
  const introduction = <SocialLink iconName="fab fa-linkedin" linkTarget={'https://www.linkedin.com/in/havilehto/'} tooltipText={'LinkedIn'} />;
  expect(wrapper.contains(introduction)).toEqual(true);
});
