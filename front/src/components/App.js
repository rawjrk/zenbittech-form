import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import ContactForm from "./ContactForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>Reach out to us!</Header>
      <ContactForm onSubmit={console.log} />
    </>
  );
}

export default App;
