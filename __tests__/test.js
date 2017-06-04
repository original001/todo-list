import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import {Item, Check, Close} from '../src/views/Item';
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
  it('should call remove when close clicked', () => {
    const onClose = sinon.spy();
    const wrapper = mount(<Item checked={false} onClose={onClose}/>);
    const close = wrapper.find(Close);
    close.simulate('click');
    expect(onClose.calledOnce).toBe(true);
  })
})

describe('App', function() {
  beforeEach(() => {
    this.todos = [{
      id: 1,
      checked: false,
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
    const firstClose = wrapper.find(Close).first();
    firstClose.simulate('click');
    expect(wrapper.find(Item).length).toBe(1);
  })
})
