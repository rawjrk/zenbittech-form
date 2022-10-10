import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import links from "../links";
import createRequest from "../api/createRequest";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header>Reach out to us!</Header>
        <ContactForm onSubmit={createRequest} />
      </main>
      <Footer>
        <SocialLinks links={links} />
      </Footer>
    </>
  );
}

export default App;
