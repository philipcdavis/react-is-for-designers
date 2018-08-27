import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import { MarkdownStyles, RainbowType, LineBreak, RainbowBreak, Example } from './styled';
import { Heading, Box, Text } from 'rebass';
import StateInteraction from './StateInteraction';
import RealisticData from './RealisticData';

class Post extends Component {

  render() {
    return (
      <Box>
      <MarkdownStyles>
        <Markdown>{`
React is a powerful design tool. There's a lot you can do with React that would be difficult with a traditional design application. Prototyping with live data, creating complex interactive experiences, and creating component libraries for designers & developers. React opens up many ways of designing that were previously difficult or totally inaccessible.

If you are a designer interested in learning React, but don't know how to get started, here is what I would recommend:

## 1. Scaffold a project and build something simple
Avoid any method of learning React that doesn't have you spending most of your time coding.

Manual setup and configuration of React projects can stop you  from ever getting started. I would use [create-react-app](https://github.com/facebook/create-react-app) to scaffold your projects at first. If you don't know how to use the terminal, don't be afraid to open it up and learn a few commands.

You don't need to create an entire web app. Try building small design components with multiple states, slimmed down design systems, or simple data visualizations.

## 2. Read the React docs all the way through
The actual React API isn't that long, and it shouldn't take more the 2 hours to read it all. Read it once, all the way through. Don't worry if you don't understand what everything means. It's good to have a high level overview of what react is doing and what types of things are in the library.
`}
          </Markdown>
        </MarkdownStyles>
        <RainbowBreak />

        <RainbowType>
          <Heading textAlign={["left", "center"]} fontSize="2rem" mb={3}>Learn how to use React for design work</Heading>
        </RainbowType>
        <Text textAlign={["left", "center"]}>
        {`You don't need to know everything about web development to get get a lot out of React. I'm going to be creating resources to help designers learn the parts of react that are relevant for their work. If you're a designer interested in using React you should follow along.`}
        </Text>
      </Box>
    );
  }

}

export default Post;
