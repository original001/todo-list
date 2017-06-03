import React from 'react';
import { shallow } from 'enzyme';

import {Item, Check} from '../src/views/App.st.js';

describe('', () => {
  it('', () => {
    const wrapper = shallow(<Item/>);
    const check = wrapper.find(Check);
    wrapper.simulate('click');
    expect(check.props().checked).toBe(true);
  })
})
