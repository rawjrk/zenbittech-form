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
