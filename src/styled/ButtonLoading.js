import React, { Component } from "react";
import styled from 'styled-components';
import { pulse } from './utils';
import { Button } from "./";


const LoadingDot = styled.div`
  width: 8px;
  height: 8px;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 8px;
  display: inline-block;
  animation: ${pulse} 0.4s infinite;
  animation-delay: ${props => props.delay + "s"};
  animation-direction: alternate;
  background-color: #222;
  vertical-align: middle;
`;

class ButtonLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: false,
      saving: false,
      completed: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        {!this.state.saving && !this.state.completed ? (
          <div>Click Me</div>
        ) : null }
        {this.state.saving & !this.state.completed ? (
          <div>
            <LoadingDot delay={0.1} />
            <LoadingDot delay={0.2} />
            <LoadingDot delay={0.3} />
          </div>
        ) : null}

        { this.state.completed & !this.state.saving ? (
          <div>Success</div>
        ):null}
      </Button>
    );
  }

  handleClick() {
    if (!this.state.saving && !this.state.completed) {
      this.setState({saving: true})
      setTimeout(() => {
        this.setState({
          saving: false,
          completed: true
        });
      }, 3000)
    } else {
      this.setState({
        saving: false,
        completed: false
      })
    }
  }
};

export default ButtonLoading;
