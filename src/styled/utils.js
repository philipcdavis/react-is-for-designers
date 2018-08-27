import { keyframes } from "styled-components";

export const color = {
  blue: '#0099FF',
  red: '#FF4D4D',
  green: '##6AED76',
  yellow: '#FFC54D',
  purple: '#F04DFF',
  black: '#000000',
  gray1: '',
  gray2: '',
  gray3: '',
  gray4: '',
}

export function colorChange(type) {
  return keyframes`
    0% { ${type}: #F04DFF; }
    25%  { ${type}: #FF4D4D; }
    50% { ${type}: #FFC54D; }
    75% { ${type}: #6AED76; }
    100% { ${type}: #6AC4ED; }
  `
}

export function pulse() {
  return keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  `
}
