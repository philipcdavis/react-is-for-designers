import styled from 'styled-components';

const Button = styled.button`
  padding: 17px 40px;
  font-size: 17px;
  color: #222;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
  background-color: #eee;
  transition: 0.2s all ease;
  animation: bgColorChange 20s infinite alternate;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 4px;
    background-color: white;
  }
`

export default Button;
