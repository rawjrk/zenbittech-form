import styled from "styled-components";
import bgMap from "../assets/images/bg-map-piece.png";

const Img = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  height: calc(100vh - 205px);
`;

function BackgroundMap({ style }) {
  return <Img src={bgMap} style={style} />;
}

export default BackgroundMap;
