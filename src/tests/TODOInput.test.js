import React from 'react';
import { shallow, mount } from 'enzyme';
import TODOInput from '../TODOInput';

const findInput = c => c.find('input[type="text"]');
const findButton = c => c.find('button');
const handleChangeInput = (input, value) =>
  input.simulate('change', { target: { value } });

describe('TODOInput component', () => {
  it('renders without crashing', () => {
    shallow(<TODOInput />);
  });

  it('renders text input and submit button', () => {
    const component = shallow(<TODOInput />);

    expect(findInput(component).exists()).toBeTruthy();
    expect(findButton(component).exists()).toBeTruthy();
  });

  it('input works', () => {
    const component = mount(<TODOInput />);
    const input = findInput(component);

    handleChangeInput(input, 'Hello');

    expect(input.instance().value).toEqual('Hello');
  });

  it('submit button works and submits input value', () => {
    const onSubmit = jest.fn();
    const component = shallow(<TODOInput onSubmit={onSubmit} />);
    const input = findInput(component);

    handleChangeInput(input, 'Hello');
    findButton(component).simulate('click');
    expect(onSubmit).toHaveBeenCalledWith('Hello');
  });
});
