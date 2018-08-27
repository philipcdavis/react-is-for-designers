import React, { Component } from 'react';
import { ButtonLoading } from './styled';
import { Box, Flex, Text } from 'rebass';

class StateInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      completed: false
    };
  }
  render() {
    return (
      <div>
        <Flex width={2/3} mx="auto" mt={5}>
          <Box width={1/3} px={2}>
            <ButtonLoading>Hello</ButtonLoading>
          </Box>
          <Box width={1/3} px={2}>
            <ButtonLoading>Hello</ButtonLoading>
          </Box>
          <Box width={1/3} px={2}>
            <ButtonLoading>Hello</ButtonLoading>
          </Box>
        </Flex>

        <Flex width={2/3} mx="auto" mt={5} mb={5}>

          <Box width={1/3} ml={100/3 + '%'} px={2}>
            <ButtonLoading>Hello</ButtonLoading>
          </Box>
        </Flex>
      </div>

    );
  }

}

export default StateInteraction;
