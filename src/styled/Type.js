import styled, { css, keyframes } from "styled-components";

const colorChange = keyframes`
  0% { color: #F04DFF; }
  25%  { color: #FF4D4D; }
  50% { color: #FFC54D; }
  75% { color: #6AED76; }
  100% { color: #6AC4ED; }
`

export const RainbowType = styled.span`
  animation: ${colorChange} 20s infinite alternate;
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
