import GoodieOne from "../assets/images/goodie-1.svg";
import GoodieTwo from "../assets/images/goodie-2.svg";
import GoodieThree from "../assets/images/goodie-3.svg";
import GoodieFour from "../assets/images/goodie-4.svg";
import { COLORS as C } from "../styles/GlobalStyle";

export function RedGoodie({ style }) {
  const goodieStyles = {
    transform: "rotateZ(315deg)",
    color: C.RED,
    ...style,
  };
  return <GoodieOne style={goodieStyles} />;
}

export function SmallYellowGoodie({ style }) {
  const goodieStyles = {
    transform: "rotateZ(315deg)",
    color: C.YELLOW,
    ...style,
  };
  return <GoodieTwo style={goodieStyles} />;
}

export function YellowGoodie({ style }) {
  const goodieStyles = {
    color: C.YELLOW,
    ...style,
  };
  return <GoodieThree style={goodieStyles} />;
}

export function GreenGoodie({ style }) {
  const goodieStyles = {
    color: C.GREEN,
    ...style,
  };
  return <GoodieFour style={goodieStyles} />;
}
