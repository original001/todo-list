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
    font-family: FontAwesome;
    font-weight: normal;
    font-size: 16px;
    content: ${props => props.checked ? '""' : ''};
    color: green;
  }
`

const TextItem = styled.div`
  margin-left: 50px;
  font-size: 16px;
`

const ItemWrapper = styled.div`
  position: relative;
  padding: 10px ${sheetPadding};
  border-bottom: 1px solid #ddd;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`

export const Close = styled.div`
  position: absolute;
  right: ${sheetPadding};
  top: 0;
  bottom: 0;
  width: 30px;
  height: 40px;
  text-align: right;
  margin: auto;
  &:after {
    font-family: FontAwesome;
    font-weight: normal;
    font-size: 16px;
    color: #888;
    content: '';
  }
  &:hover:after {
    color: #444;
  }
`

export class Item extends React.Component {
  render() {
    const props = this.props;
    return (
      <ItemWrapper onClick={this.props.onCheck}>
        <Check checked={this.props.checked}/>
        <TextItem>{props.children}</TextItem>
        <Close onClick={this.props.onClose}/>
      </ItemWrapper>
    )
  }
}
