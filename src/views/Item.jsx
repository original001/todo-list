import React from 'react';
import styled from 'styled-components';
import {sheetPadding} from '../styled-variables';

export const Check = styled.div`
  float: left;
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  border: 1px solid #ddd;
  margin: 5px 0;
  text-align: center;
  &:after {
    content: ${props => props.checked ? '"√"' : ''};
    color: green;
  }
`

const TextItem = styled.div`
  margin-left: 50px;
  font-size: 16px;
`

const ItemWrapper = styled.div`
  padding: 10px ${sheetPadding};
  border-bottom: 1px solid #ddd;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`

export class Item extends React.Component {
  state = {
    checked: this.props.checked,
  }
  render() {
    const props = this.props;
    return (
      <ItemWrapper onClick={this.handleClick}>
        <Check checked={this.state.checked}/>
        <TextItem>{props.children}</TextItem>
      </ItemWrapper>
    )
  }
  handleClick = () => {
    this.setState({checked: !this.state.checked})
  }
}
