import { createGlobalStyle } from "styled-components";
import HKGroteskRegularWoff from "../assets/fonts/HKGrotesk-Regular.woff";
import HKGroteskRegularWoff2 from "../assets/fonts/HKGrotesk-Regular.woff2";
import HKGroteskMediumWoff from "../assets/fonts/HKGrotesk-Medium.woff";
import HKGroteskMediumWoff2 from "../assets/fonts/HKGrotesk-Medium.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 400;
    src:
      url('${HKGroteskRegularWoff2}') format('woff2'),
      url('${HKGroteskRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 500;
    src:
      url('${HKGroteskMediumWoff2}') format('woff2'),
      url('${HKGroteskMediumWoff}') format('woff');
  }

  html, body {
    font-family: 'HK Grotesk', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;

export const COLORS = {
  RED: "#f472b7",
  YELLOW: "#fad34f",
  GREEN: "#46ebb0",
  CLOUD: "#c6c6c6",
  BORDER: "#d8d8d8",
  FOOTER: "#fafafa",
  LINK: "#696969",
};
