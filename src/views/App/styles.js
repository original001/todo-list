import styled from 'styled-components';
import {sheetPadding} from '../../styled-variables';

export const Wrapper = styled.div`
  width: 600px;
  margin: 100px auto;
`

export const Sheet = styled.div`
  background: #fff;
  box-shadow: 0 3px 12px rgba(0,0,0,.2);
`

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  line-height: 62px;
  padding: 0 ${sheetPadding};
  font-size: 20px;
  border: none;
`

export const Filter = styled.div`
  padding: 9px ${sheetPadding} 8px;
  border-top: 1px solid #ddd;
`

export const FilterLink = styled.span`
  cursor: ${props => props.active ? 'default' : 'pointer'};
  margin-right: 15px;
  opacity: ${props => props.active ? 1 : 0.4};
  &:hover {
    opacity: ${props => props.active ? 1 : 0.6};
  }
`
