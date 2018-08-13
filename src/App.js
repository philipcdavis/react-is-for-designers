import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import SignupForm from './SignupForm';
import Post from './Post';
import Logo from './Logo';
import {Heading, Box} from 'rebass';

injectGlobal`
  * { box-sizing: border-box; }

  @font-face {
    font-family: 'Nitti';
    src: url('./fonts/nittigrotesk-normal-v20.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nitti';
    src: url('./fonts/nittigrotesk-bold-v20.woff') format('woff');
    font-weight: bold;
    font-style: normal;
   }

  body {
    margin: 0;
    padding: 0;
    font-family: "Nitti", sans-serif;
    background-color: black;
    font-size: 1.6rem;
    line-height: 1.3;
    color: #ccc;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Box p={3} mx="auto" width={[1, "45rem"]}>
          <Logo className="mt4 mb1 mx-auto block" alt="logo" />
          <Heading mb={[4,5]} className="center mb4 white">React is for Designers</Heading>
          <Post />
        </Box>
        <Box mx="auto" width={[1, "500px"]}>
          <SignupForm />
        </Box>
      </div>
    );
  }
}

export default App;
