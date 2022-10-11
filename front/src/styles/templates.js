import { COLORS as C } from "../styles/GlobalStyle";

export const inputStyles = `
  width: 557px;
  max-width: 60vw;

  margin-bottom: 0.5rem;
  border: 1px solid ${C.INPUT_BORDER};
  border-radius: 10px;
  display: block;

  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 500;

  &::placeholder {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: black;
  }
`;

const centerElementsTemplate = `
  display: [display];
  align-items: center;
  justify-content: center;
`;

export const centerElementsGrid = centerElementsTemplate.replace(
  /\[display\]/,
  "grid"
);

export const centerElementsFlex = centerElementsTemplate.replace(
  /\[display\]/,
  "flex"
);

export const gridTemplate = `
  display: grid;
  grid-template-columns: 6fr 4fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
