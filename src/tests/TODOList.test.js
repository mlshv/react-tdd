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

const findTodoItem = c => c.find(TODOItem);

describe('TODOList component', () => {
  it('renders without crashing', () => {
    shallow(<TODOList />);
  });

  it('renders list of TODOs', () => {
    const component = shallow(<TODOList todos={todoItems} />);

    expect(findTodoItem(component)).toHaveLength(2);
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

    const firstItem = findTodoItem(component).get(0)

    firstItem.props.onRemove();
    firstItem.props.onCheck();

    expect(onRemove).toBeCalledWith(0);
    expect(onCheck).toBeCalledWith(0);
  });
});
