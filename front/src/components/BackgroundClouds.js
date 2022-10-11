import Overflow from "./Overflow";
import bgClouds from "../assets/images/bg-clouds.png";

function BackgroundClouds({ style }) {
  return (
    <Overflow style={style}>
      <img src={bgClouds} />
    </Overflow>
  );
}

export default BackgroundClouds;
