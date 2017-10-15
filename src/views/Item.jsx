// @flow //
import React from 'react';
import styled from 'styled-components';
import {sheetPadding} from '../styled-variables';
const startIcon = require('../img/start.svg');
const stopIcon = require('../img/stop.svg');
const crossIcon = require('../img/cross.svg');
const crossHoverIcon = require('../img/cross-hover.svg');
const checkIcon = require('../img/check.svg');
const checkHoverIcon = require('../img/check-hover.svg');

type Props = {
  checked: boolean,
  children?: React.Element[],
  onClose: (e: Event) => void,
  onCheck: (e: Event) => void,
}

export class Item extends React.Component {
  props: Props;

  render() {
    const props = this.props;
    return (
      <ItemWrapper>
        <Action />
        <TextItem checked={props.checked}>{props.children}</TextItem>
        {props.checked ||
          <Check onClick={this.props.onCheck}/>
        }
        <Close onClick={this.props.onClose}/>
      </ItemWrapper>
    )
  }
}


const Action = styled.div`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  width: 24px;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  background: 50% 50% no-repeat;
  background-image: url('${props => props.active ? stopIcon : startIcon}');
  border: 1px solid #808080;
  margin-right: 12px;
`

const TextItem = styled.div`
  display: inline-block;
  font-size: 14px;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`

const ItemWrapper = styled.div`
  position: relative;
  padding: 0 ${sheetPadding};
  border-top: 1px solid #ddd;
  line-height: 52px;
`

const RightIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  margin: auto;
  cursor: pointer;
`

const Close = styled(RightIcon)`
  right: 20px;
  background: url('${crossIcon}') 0 0 no-repeat;
  &:hover {
    background-image: url('${crossHoverIcon}');
  }
`

const Check = styled(RightIcon)`
  right: 50px;
  width: 19px;
  background: url('${checkIcon}') 0 0 no-repeat;
  &:hover {
    background-image: url('${checkHoverIcon}');
  }
`
