import { createGlobalStyle } from 'styled-components';
// Load material icons font
import './icons.css';
import './font.css';
// Theme
import theme from './theme';
// Reset custom browser styles
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%; 
  }
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
		font: inherit;
		color: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
		line-height: 17px;
    color: ${theme.color.black};
    -webkit-overflow-scrolling: touch;
  }
  ol, ul {
    list-style: none;
  }
  p, ul, li {
    margin: 0;
    padding: 0;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: 0;
    background-color: transparent;
    &:focus {
      outline: 0;
      box-shadow: 0;
    }
  }  
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
    &:disabled {
      cursor: initial;
    }
  }
	a {
		text-decoration: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  input[type=number] {
      -moz-appearance: textfield; /* Firefox */
  }
`;

export default GlobalStyle;
