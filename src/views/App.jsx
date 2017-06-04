// @flow //

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

export const Filter = styled.div`
  padding: 5px ${sheetPadding};
`

const FilterLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;
  color: ${props => props.active ? 'green' : 'inherit'};
`

type FilterValue = 'all' | 'current';

interface Todo {
  id: number;
  checked: boolean;
  name: string;
}

interface State {
  inputValue: string;
  filter: FilterValue;
  todos: Todo[];
}

let ID = 0;

const getId = () => ID++

export default class App extends React.Component {
  state: State = {
    inputValue: '',
    todos: this.props.todos || [{
      id: getId(),
      checked: true,
      name: 'some name',
    }, {
      id: getId(),
      checked: false,
      name: 'another name',
    }],
    filter: 'all',
  };
  render() {
    return (
      <Wrapper>
        <Sheet>
          <Input value={this.state.inputValue}
                 onChange={(e) => this.setState({inputValue: e.target.value})}
                 onKeyDown={this._handleKeyDown}
               />
          <Filter>
            <FilterLink active={this.state.filter === 'all'}
                        onClick={() => this.setState({filter: 'all'})}>
                        Show all
            </FilterLink>
            <FilterLink active={this.state.filter === 'current'}
                        onClick={() => this.setState({filter: 'current'})}>
                        Show current
            </FilterLink>
          </Filter>
          {this.state.todos.filter(todo => {
            return this.state.filter === 'all' ? true : !todo.checked
          }).map((item) =>
            <Item onClose={(e) => this._handleClose(e, item.id)}
                  onCheck={(e) => this._handleCheck(e, item.id)}
                  key={item.id} checked={item.checked}>{item.name}</Item>
          )}
        </Sheet>
      </Wrapper>
    )
  }
  _handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'KeyEnter' && !!this.state.inputValue) {
      this.setState({
        todos: [
          ...this.state.todos,
          {id: getId(), checked: false, name: this.state.inputValue},
        ],
        inputValue: '',
      })
    }
  }
  _handleClose = (e: Event, id: number) => {
    e.stopPropagation();
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos})
  }
  _handleCheck = (e: Event, id: number) => {
    const todos = this.state.todos.map(todo => todo.id !== id ? todo : {...todo, checked: !todo.checked});
    this.setState({todos})
  }
}
