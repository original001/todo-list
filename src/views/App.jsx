import React from 'react';
import {Wrapper, Sheet, Header, Item} from './App.st.js';

const list = [{
  checked: true,
  name: 'some name',
}, {
  checked: false,
  name: 'another name',
}]

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Sheet>
          <Header>Schedule</Header>
          {list.map(item =>
            <Item checked={item.checked}>{item.name}</Item>
          )}
        </Sheet>
      </Wrapper>
    )
  }
}
