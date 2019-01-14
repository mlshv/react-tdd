import React from 'react';
import { shallow, mount } from 'enzyme';
import TODOItem from '../TODOItem';

const findText = c => c.find('.todo-item__text');
const findCheckbox = c => c.find('input[type="checkbox"]');
const findButton = c => c.find('.todo-item__remove-button');

describe('TODOItem component', () => {
  it('renders without crashing', () => {
    mount(<TODOItem />);
  });

  it('renders text', () => {
    const component = shallow(<TODOItem text="Hello" />);

    expect(findText(component).text()).toEqual('Hello');
  });

  it('renders checkbox that works', () => {
    const onToggleCheck = jest.fn();
    const component = mount(
      <TODOItem text="Hello" onToggleCheck={onToggleCheck} />
    );

    findCheckbox(component).simulate('change');
    expect(onToggleCheck).toBeCalledWith(true);
  });

  it('renders remove button that works', () => {
    const onRemove = jest.fn();
    const component = shallow(<TODOItem onRemove={onRemove} />);

    findButton(component).simulate('click');
    expect(onRemove).toBeCalled();
  });
});
