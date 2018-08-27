import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  background-color: #333;
  padding: 15px;
  font-size: 17px;
  width: 100%;
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  transition: 0.1s all ease;
  border: 2px solid transparent;
  border-right: 0;

  &:hover {
    background-color: #343434;
  }

  &:focus {
    outline: none;
    background-color: #333;
    border-color: #555;
  }

  @media(max-width: 30rem) {
    padding-left: 15px;
    padding-right: 15px;
    font-size: .8rem;
  }
`;

export default Input;
