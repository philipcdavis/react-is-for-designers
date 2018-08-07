import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Post from './Post'
import logo from './logo.svg';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App container p2">

        <div>
          <img src={logo} className="mt4 mb1 mx-auto block" alt="logo" />
          <h1 className="center mb4 white">React is for Designers</h1>
          <Post />
        </div>
        <div style={{
          maxWidth: 500,
          margin: "50px auto"
        }}>
          <SignupForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
