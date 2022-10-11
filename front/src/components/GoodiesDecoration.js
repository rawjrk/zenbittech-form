import { RedGoodie, SmallYellowGoodie, YellowGoodie } from "./Goodies";
import BackgroundMap from "./BackgroundMap";
import Hide from "./Hide";

function GoodiesDecoration({ zIndex = -1 }) {
  const position = "absolute";

  return (
    <>
      <Hide breakpoint="1200px">
        <RedGoodie
          style={{ zIndex, position, bottom: "270px", right: "350px" }}
        />
        <YellowGoodie
          style={{ zIndex, position, bottom: "440px", right: "475px" }}
        />
      </Hide>

      <Hide breakpoint="956px">
        <BackgroundMap style={{ zIndex: zIndex - 1 }} />
      </Hide>

      <Hide breakpoint="756px">
        <SmallYellowGoodie
          style={{ zIndex, position, top: "40px", left: "46px" }}
        />
        <RedGoodie
          style={{ zIndex, position, bottom: "-15px", left: "60px" }}
        />
        <SmallYellowGoodie
          style={{ zIndex: 2, position, bottom: "40px", right: "-25px" }}
        />
      </Hide>
    </>
  );
}

export default GoodiesDecoration;
