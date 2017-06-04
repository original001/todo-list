import React from 'react';
import styled from 'styled-components';
import {Item} from './Item';
import {sheetPadding} from '../styled-variables';

const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
`

const Sheet = styled.div`
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,.2);
`

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 20px ${sheetPadding };
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ddd;
`

export default class App extends React.Component {
  state = {
    inputValue: '',
    todos: this.props.todos || [{
      checked: true,
      name: 'some name',
    }, {
      checked: false,
      name: 'another name',
    }],

  }
  render() {
    return (
      <Wrapper>
        <Sheet>
          <Input value={this.state.inputValue}
                 onChange={(e) => this.setState({inputValue: e.target.value})}
                 onKeyDown={this.handleKeyDown}
               />
          {this.state.todos.map((item, ind) =>
            <Item key={ind} checked={item.checked}>{item.name}</Item>
          )}
        </Sheet>
      </Wrapper>
    )
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13 && !!this.state.inputValue) {
      this.setState({
        todos: [
          ...this.state.todos,
          {checked: false, name: this.state.inputValue},
        ],
        inputValue: '',
      })
    }
  }
}
