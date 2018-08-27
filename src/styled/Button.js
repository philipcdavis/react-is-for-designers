import styled from 'styled-components';
import { colorChange, pulse } from "./utils";

const Button = styled.button`
  padding: 17px 30px;
  font-size: 17px;
  color: #222;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  animation: ${colorChange("background")} 20s infinite alternate;
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

export const ButtonInput = Button.withComponent('input').extend`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  -webkit-appearance: none;
`;

export default Button;
