import styled from "styled-components";

const Log = styled.div`
  color: red;
`;

function ErrorLog({ text }) {
  return <Log>{text}</Log>;
}

export default ErrorLog;
