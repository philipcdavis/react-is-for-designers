import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  background-color: #333;
  padding: 15px;
  font-size: 17px;
  width: calc(100% - 200px);
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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
`;

export default Input;
