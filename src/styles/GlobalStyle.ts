import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('assets/fonts/Roboto.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }
  body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const colors = {
  blue: "#dbaeae",
  green: "#CD9B9B",
  bgGreen: "#8B6969",
  shadow: "rgba(0, 0, 0, 0.25)",
  white: "#ffffff",
  black: "#000000",
  gray: "#cccccc",
  red: "#660000",
  rosa: "#dbaeae",
  rosa1: "#CD9B9B",
  marrom: "#8B6969",
}