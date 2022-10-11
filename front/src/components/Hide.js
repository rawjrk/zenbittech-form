import styled from "styled-components";

const Hide = styled.div`
  @media (max-width: ${(props) => props.breakpoint}) {
    display: none;
  } ;
`;

export default Hide;
