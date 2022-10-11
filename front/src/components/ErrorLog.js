import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";

const Log = styled.div`
  display: inline-block;
  margin: 2em 0 0 2em;

  font-size: 1.1em;
  font-weight: 500;
  color: ${C.ERROR};
`;

function ErrorLog({ text }) {
  return <Log>{text}</Log>;
}

export default ErrorLog;
