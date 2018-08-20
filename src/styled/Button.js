import styled from 'styled-components';
import { colorChange } from "./utils";

const Button = styled.button`
  padding: 17px 30px;
  font-size: 17px;
  color: #222;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
  background-color: #eee;
  transition: 0.2s all ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 4px;
  }

  @media(max-width: 30rem) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: .8rem;
  }
`

const ButtonInput = Button.withComponent('input')

export const RainbowButton = ButtonInput.extend`
  animation: ${colorChange("background")} 20s infinite alternate;
`

export default Button;
