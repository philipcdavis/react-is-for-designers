import React, { Component } from 'react';
import { Box, Flex, Text } from 'rebass';
import Avatar from './Avatar';

class RealisticData extends Component {
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
            <Avatar />
          </Box>
          <Box width={1/3} px={2}>
            <Avatar />
          </Box>
          <Box width={1/3} px={2}>
            <Avatar />
          </Box>
        </Flex>
      </div>

    );
  }

}

export default RealisticData;
