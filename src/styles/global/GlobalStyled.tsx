import { createGlobalStyle, css } from "styled-components";
import globals from "./globals";

const GlobalReset = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    cursor: default;
  }

  ul,
  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    cursor: pointer;
    color: inherit;
    border: none;
    background: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  button {
    border: 0;
  }

	img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input {
    outline: none;
  }

  span {
    cursor: default;
  }
`;

const GlobalStyles = css`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${globals.colors.primary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${globals.colors.secondary};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${globals.colors.text_primary};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${globals.colors.primary};
    font-family: ${globals.fonts.mainFont};
    position: relative;

    overflow-x: hidden;
  }

  ${GlobalReset}
`;

export default createGlobalStyle`${GlobalStyles}`;
