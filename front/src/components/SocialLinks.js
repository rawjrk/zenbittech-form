import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";
import { centerElementsFlex } from "../styles/templates";

const LinksPanel = styled.div`
  ${centerElementsFlex}
`;

const Link = styled.a`
  color: ${C.LINK};
  margin: 12px;
`;

function SocialLinks({ links = [], style = {} }) {
  return (
    <LinksPanel style={style}>
      {links.map((l, i) => (
        <Link key={i} href={l.url}>
          {l.logo}
        </Link>
      ))}
    </LinksPanel>
  );
}

export default SocialLinks;
