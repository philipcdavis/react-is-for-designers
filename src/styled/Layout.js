import styled from 'styled-components';
import { colorChange } from "./utils";

export const LineBreak = styled.hr`
  width: 50%;
  border: 1px solid #fff;
  margin-top: 10%;
  margin-bottom: 10%;
  opacity: 0.2;
`;

export const RainbowBreak = LineBreak.extend`
  animation: ${colorChange("border-color")} 20s infinite alternate;
`
