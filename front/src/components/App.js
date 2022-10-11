import GlobalStyle from "../styles/GlobalStyle";
import AppGrid, { Main, Footer } from "./AppGrid";
import Margin from "./Margin";
import Header from "./Header";
import ContactForm from "./ContactForm";
import createRequest from "../api/createRequest";
import SocialLinks from "./SocialLinks";
import links from "../links";
import BackgroundClouds from "./BackgroundClouds";
import GoodiesDecoration from "./GoodiesDecoration";
import { GreenGoodie } from "./Goodies";

function App() {
  return (
    <>
      <BackgroundClouds
        style={{ zIndex: -3, position: "absolute", top: 0, left: 0 }}
      />
      <GoodiesDecoration />
      <AppGrid style={{ width: "100vw", height: "100vh" }}>
        <GlobalStyle />
        <Main>
          <Margin length="2em">
            <Header style={{ marginBottom: "50px" }}>Reach out to us!</Header>
            <ContactForm onSubmit={createRequest} />
          </Margin>
        </Main>
        <Footer style={{}}>
          <SocialLinks
            links={links}
            style={{ zIndex: 1, position: "relative", bottom: "5%" }}
          />
          <GreenGoodie
            style={{ position: "absolute", top: "0px", right: "10%" }}
          />
        </Footer>
      </AppGrid>
    </>
  );
}

export default App;
