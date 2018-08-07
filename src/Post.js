import React, { Component } from 'react';
import Markdown from 'react-remarkable';

class Post extends Component {

  render() {
    return (
      <div>
      <Markdown
        source={`
React is a powerful design tool. There's a lot you can do with React that would be difficult with a traditional design application. Prototyping with live data, creating complex interactive experiences, and creating component libraries for designers & developers. React opens up many ways of designing that were previously difficult or totally inaccessible.

The difficult thing is that designers often don't need to know everything about javascript, react, or programming languages to get a lot out of it. If you are a designer interested in learning React, but don't know how to get started, here is what I would recommend:

## 1. Scaffold a project and build something simple
Avoid any method of learning React that doesn't have you spending most of your time coding. Anything you learn will be more meaningful if you have wrestled with real problems.

Manual setup and configuration of React projects can prevent some people from ever getting started. I would use [create-react-app](https://github.com/facebook/create-react-app) to scaffold your projects at first. If you don't know how to use the terminal, don't be afraid to open it up and learn a few commands.

## 2. Read the React docs all the way through
The actual React API isn't that long, and it shouldn't take more the 2 hours to read it all. Read it once, all the way through. Don't worry if you don't understand what everything means. It's good to have a high level overview of what react is doing and what types of things are in the library.

## 3. Focus on the Fundamentals
Don't get paralyzed by learning the latest CSS-in-JS library. Nail the fundamentals and keep things simple at first.

## 4. Ask questions to programmers on your team
If you have programmers on your team, ask them as many questions as you can. If you don't have a team member who knows react, the second best thing is to join a community of developers at a meet-up or online.

## 5. Create lots of different components
You don't need to create a web app. Try building small design components with multiple states, slimmed down design systems, or simple data visualizations.

___

I'm going to be creating some resources to help designers learn the parts of react that are relevant for their work. If you're interested in using react for your design work you should follow along.
        `}
      />
      </div>
    );
  }

}

export default Post;
