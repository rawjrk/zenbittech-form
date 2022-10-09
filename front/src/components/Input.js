import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 557px;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 1.1rem;
  padding-left: 2.5em;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: black;
    font-size: inherit;
  }
`;

export default Input;
