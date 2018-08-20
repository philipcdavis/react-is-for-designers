import styled, { css } from "styled-components";
import { colorChange } from "./utils";

export const RainbowType = styled.span`
  animation: ${colorChange("color")} 20s infinite alternate;
`

export const MarkdownStyles = styled.div`
  & h1 {
    font-size: 2rem;
    color: green;
  }

  & h2 {
    font-size: 1.7rem;
    margin-bottom: 0;
    margin-top: 45px;
  }

  & p {
    margin-top: 10px;
  }

  & a {
    color: #ccc;
    text-decoration: none;
    border-bottom: 2px solid #555;
  }
`

export const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  border-bottom: 2px solid #555;
`
