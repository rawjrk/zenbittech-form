import { useInput } from "../hooks";
import Input from "./Input";
import Button from "./Button";

function ContactForm({ onSubmit = (f) => f }) {
  const [nameProps, resetName] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [messageProps, resetMessage] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      name: nameProps.value,
      email: emailProps.value,
      message: messageProps.value,
    });
    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <form onSubmit={submit}>
      <Input {...nameProps} type="text" placeholder="Your name*" required />
      <Input {...emailProps} type="email" placeholder="Your e-mail*" required />
      <Input
        {...messageProps}
        type="text"
        placeholder="Your message*"
        required
      />
      <Button type="submit">Send message</Button>
    </form>
  );
}

export default ContactForm;
