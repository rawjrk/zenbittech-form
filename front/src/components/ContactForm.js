import { useState } from "react";
import { useInput } from "../hooks";
import Input from "./Input";
import TextArea from "./TextArea";
import YellowButton from "./YellowButton";
import ErrorLog from "./ErrorLog";

function ContactForm({ onSubmit = (f) => f }) {
  const [nameProps, resetName] = useInput("", "name");
  const [emailProps, resetEmail] = useInput("", "email");
  const [messageProps, resetMessage] = useInput("", "message");
  const [error, setError] = useState("");

  const resetForm = () => {
    resetName();
    resetEmail();
    resetMessage();
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: nameProps.value,
      email: emailProps.value,
      message: messageProps.value,
    };
    onSubmit(data, resetForm, setError);
  };

  return (
    <form onSubmit={submit}>
      <Input {...nameProps} type="text" placeholder="Your name*" required />
      <Input {...emailProps} type="email" placeholder="Your e-mail*" required />
      <TextArea
        {...messageProps}
        type="text"
        placeholder="Your message*"
        required
      />
      <YellowButton type="submit" style={{ marginTop: "23px" }}>
        Send message
      </YellowButton>
      {error ? <ErrorLog text="Something went wrong." /> : null}
    </form>
  );
}

export default ContactForm;
