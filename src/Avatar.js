import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, Image} from 'rebass';

const AvatarContainer = styled.div`
  background-color: #111;
  border-radius: 8px;
  padding: 20px;
  font-size: 1.3rem;
  text-align: center;
`;

class Avatar extends Component {

  render() {
    return (
      <AvatarContainer>
      <Image src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'/>
        <Text>Albert Lee</Text>
      </AvatarContainer>
    );
  }

}

export default Avatar;
