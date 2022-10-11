import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";

const bgColor = C.YELLOW;

const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  background-color: ${bgColor};
  border: none;
  padding: 1.5em 3em;
  border-radius: 2em;
`;

export default Button;
