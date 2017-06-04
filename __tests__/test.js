import React from 'react';
import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

import {Item, Close} from '../src/views/Item';
import App, {Input} from '../src/views/App';

describe('App', function() {
  beforeEach(() => {
    this.todos = [{
      id: 1,
      checked: true,
      name: 'some name',
    }, {
      id: 2,
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

  it('should remove item when cb has been called', () => {
    const wrapper = mount(<App todos={this.todos}/>);
    const firstItem = wrapper.find(Item).first();
    const close = firstItem.find(Close);
    close.simulate('click');
    expect(wrapper.find(Item).length).toBe(this.todos.length - 1)
  })

  it('should filter', () => {
    const wrapper = shallow(<App todos={this.todos}/>);
    wrapper.setState({filter: 'current'});
    expect(wrapper.find(Item).length).toBe(1);
    wrapper.setState({filter: 'all'});
    expect(wrapper.find(Item).length).toBe(2);
  })

  it('should checking on click', () => {
    const wrapper = mount(<App todos={this.todos}/>);
    const firstItem = wrapper.find(Item).first();
    const prevState = firstItem.props().checked;
    expect(wrapper.find(Item).length).toBe(this.todos.length);
    firstItem.simulate('click');
    expect(firstItem.props().checked).toBe(!prevState);
  })

  it('should filter after checking', () => {
    const wrapper = mount(<App todos={this.todos}/>);
    wrapper.setState({filter: 'current'});
    const visibleItems = wrapper.find(Item);
    const uncheckedItems = wrapper.findWhere((elem) => elem.is(Item) && elem.props().checked === false);
    expect(visibleItems.length).toBe(uncheckedItems.length);
    const firstItem = wrapper.find(Item).first();
    firstItem.simulate('click');
    expect(visibleItems.length).toBe(uncheckedItems.length);
  })
})
