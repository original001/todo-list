// @flow //
import React from 'react';
import {ItemWrapper, Action, Close, Check, TextItem, Time} from './styles';

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
        <Time></Time>
        {props.checked ||
          <Check onClick={this.props.onCheck}/>
        }
        <Close onClick={this.props.onClose}/>
      </ItemWrapper>
    )
  }
}
