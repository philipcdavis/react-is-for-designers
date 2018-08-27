import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const ExampleContainer = styled.div`
  border: 1px solid #222;
  border-radius: 8px;
  overflow: hidden;
`;

const ExampleDescription = styled.div`
  background: #222;
  font-size: 1.2rem;
  padding: 8px 15px;
`

class Example extends Component {

  render() {
    return (
      <ExampleContainer>

      </ExampleContainer>
    );
  }

}

export default Example;
