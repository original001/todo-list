import React from 'react';
import { shallow, mount } from 'enzyme';

import {Item, Check} from '../src/views/Item';
import App, {Input} from '../src/views/App';

describe('Item', () => {
  it('should be checked/unchecked when clicked', () => {
    const wrapper = mount(<Item checked={false}/>);
    const check = wrapper.find(Check);
    expect(check.exists()).toBe(true);
    wrapper.simulate('click');
    expect(check.props().checked).toBe(true);
    wrapper.simulate('click');
    expect(check.props().checked).toBe(false);
  })
})

describe('App', function() {
  beforeEach(() => {
    this.todos = [{
      checked: true,
      name: 'some name',
    }, {
      checked: false,
      name: 'another name',
    }]
  })

  it('should contain actual count of items', () => {
    const wrapper = shallow(<App todos={this.todos}/>);
    expect(wrapper.find(Item).length).toBe(this.todos.length);
  })

  it('should add one todo if not empty message and will be cleared', () => {
    const wrapper = mount(<App todos={this.todos}/>);
    const input = wrapper.find(Input);
    input.simulate('keydown', {keyCode: 13});
    expect(wrapper.find(Item).length).toBe(this.todos.length);

    wrapper.setState({inputValue: 'new note'});
    input.simulate('keydown', {keyCode: 13});
    expect(wrapper.find(Item).length).toBe(this.todos.length + 1);
    expect(wrapper.find(Input).props().value).toBe('');
  })
})
