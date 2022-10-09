import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";

const bgColor = C.YELLOW;

const Button = styled.button`
  display: block;

  border: none;
  border-radius: 2em;
  background-color: ${bgColor};
  color: white;

  padding: 1.5em 3em;
  font-size: 1.1rem;
  font-weight: 500;
`;

export default Button;
