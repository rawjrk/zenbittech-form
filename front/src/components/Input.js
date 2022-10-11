import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";

const Input = styled.input`
  display: block;
  font-size: 1.1rem;
  width: 557px;
  height: 93px;
  margin-bottom: 0.5rem;
  border: 1px solid ${C.INPUT_BORDER};
  border-radius: 10px;
  padding: 0 2.5em;

  &::placeholder {
    color: black;
    font-size: inherit;
  }
`;

export default Input;
