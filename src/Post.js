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
React is a powerful design tool. There's a lot you can do with React that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg. React opens up new ways of designing interfaces and the systems that support them.

There's a lot of good information out there on how to learn React. If you're looking to get started, here are my two cents:

## 1. Scaffold a project and build something simple
Avoid any method of learning React that doesn't have you spending most of your time coding.

Manual setup and configuration of React projects can stop you  from ever getting started. I would use [create-react-app](https://github.com/facebook/create-react-app) to scaffold your projects at first.

You don't need to create an entire web app. Try building small design components with multiple states, slimmed down design systems, or simple data visualizations.

## 2. Read the React docs all the way through
The [React documentation](https://reactjs.org/docs/getting-started.html) isn't that long, and it shouldn't take more the 2 hours to read it all. Read it once, all the way through. Don't worry if you don't understand what everything means. It's good to have a high level overview of what react is doing and what types of things are in the library.

You can pick up React faster than you think. Find someone who knows React and ask them lots of questions. If there's anything I can do to help feel free to [reach out](https://twitter.com/philipcdavis).
`}
          </Markdown>
        </MarkdownStyles>
        <RainbowBreak />

        <RainbowType>
          <Heading textAlign={["left", "center"]} fontSize="2rem" mb={3}>Learn how to use React for design work</Heading>
        </RainbowType>
        <Text textAlign={["left", "center"]}>
        {`You don't need to know everything about web development to get get a lot out of React. I'm going to be creating resources to help designers learn the parts of React that are relevant for their work. If you're a designer interested in using React you should subscribe.`}
        </Text>
      </Box>
    );
  }

}

export default Post;
