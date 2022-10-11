import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";
import { gridTemplate, centerElementsGrid } from "../styles/templates";

const AppGrid = styled.div`
  ${gridTemplate}
  grid-auto-rows: auto 200px;
`;

export const Main = styled.main`
  grid-row-start: 1;

  ${centerElementsGrid}
`;

export const Footer = styled.footer`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;

  ${gridTemplate}
  ${centerElementsGrid}

  background-color: ${C.FOOTER_BG};
  border-top: 1px solid ${C.FOOTER_BORDER};
`;

export default AppGrid;
