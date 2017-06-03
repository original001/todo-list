import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
`

const padding = '20px';

export const Sheet = styled.div`
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,.2);
`

export const Header = styled.div`
  padding: 20px ${padding};
  font-size: 20px;
  border-bottom: 1px solid #ddd;
`

export const Check = styled.div`
  float: left;
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  border: 1px solid #ddd;
  margin: 5px;
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
  padding: 10px ${padding};
  border-bottom: 1px solid #ddd;
  height: 40px;
  line-height: 40px;
`

export const Item = props =>
  <ItemWrapper>
    <Check checked={props.checked}/>
    <TextItem>{props.children}</TextItem>
  </ItemWrapper>
