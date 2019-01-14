import React from 'react';
import { shallow } from 'enzyme';
import TODOList from '../TODOList';
import TODOItem from '../TODOItem';

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
    shallow(<TODOList />);
  });

  it('renders list of TODOs', () => {
    const component = shallow(<TODOList todos={todoItems} />);

    expect(component.find(TODOItem)).toHaveLength(2);
  });

  it('propagates handlers', () => {
    const onRemove = jest.fn();
    const onCheck = jest.fn();
    const component = shallow(
      <TODOList
        todos={todoItems}
        onRemove={onRemove}
        onCheck={onCheck}
      />
    );

    component.find(TODOItem).get(0).props.onRemove();
    component.find(TODOItem).get(0).props.onCheck();
    
    expect(onRemove).toBeCalledWith(0);
    expect(onCheck).toBeCalledWith(0);
  });
});
