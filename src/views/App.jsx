import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  color: green;
`

const Text = styled.div`
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => props.big ? '20px' : '14px'};
`

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text big>Hello, world!</Text>
      </Wrapper>
    )
  }
}
