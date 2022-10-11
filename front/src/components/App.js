import GlobalStyle from "../styles/GlobalStyle";
import AppGrid, { Main, Footer } from "./AppGrid";
import Header from "./Header";
import ContactForm from "./ContactForm";
import createRequest from "../api/createRequest";
import SocialLinks from "./SocialLinks";
import links from "../links";
import { RedGoodie, YellowGoodie } from "./Goodies";

function App() {
  return (
    <AppGrid style={{ width: "100vw", height: "100vh" }}>
      <GlobalStyle />
      <Main>
        <div>
          <Header style={{ marginBottom: "50px" }}>Reach out to us!</Header>
          <ContactForm onSubmit={createRequest} />
        </div>
      </Main>
      <Footer>
        <SocialLinks links={links} />
      </Footer>
    </AppGrid>
  );
}

export default App;
