import "./Contact.css";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_j0dlohj",
      "template_dk2iylf",
      toSend,
      "user_wRJCO2qIBaz4egjMD6L2E"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <div className="form-container">
      <h1>Kontaktformulär</h1>
      <div className="contact-border"></div>

      <form onSubmit={onSubmit}>
        <input className="name"
          type="text"
          name="from_name"
          placeholder="För- och efternamn"
          value={toSend.from_name}
          onChange={handleChange}
        /><br></br>
        <input className="email"
          type="text"
          name="from_email"
          placeholder="Din email-adress"
          value={toSend.from_email}
          onChange={handleChange}
        /><br></br>
        <input className="medd"
          type="text"
          name="message"
          placeholder="Ditt meddelande"
          value={toSend.message}
          onChange={handleChange}
        /><br></br>

        <button type="submit">Skicka meddelande</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
