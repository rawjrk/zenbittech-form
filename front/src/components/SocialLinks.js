import styled from "styled-components";
import { COLORS as C } from "../styles/GlobalStyle";

const Link = styled.a`
  color: ${C.LINK};
`;

const LinksPanel = styled.div`
  display: flex;
`;

function SocialLinks({ links = [] }) {
  return (
    <LinksPanel>
      {links.map((l, i) => (
        <Link key={i} href={l.url}>
          {l.logo}
        </Link>
      ))}
    </LinksPanel>
  );
}

export default SocialLinks;
