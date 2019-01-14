import React from 'react';
import { shallow, mount } from 'enzyme';
import TODOList from '../TODOList';

const todoItems = [
  {
    text: 'Покормить кота.',
    checked: false
  },
  {
    text: 'Захватить мир.',
    checked: false
  }
];

describe('TODOList component', () => {
  it('renders without crashing', () => {
    mount(<TODOList />);
  });

  it('renders list of TODOs', () => {
    const component = shallow(<TODOList todos={todoItems} />);

    expect(component.find('.todo-item')).toHaveLength(2);
  });
});
