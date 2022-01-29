import "./Contact.css";
import { useState } from "react";
import { send } from "emailjs-com";

//funktion för att skicka input från användare till kopplad email.
function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  //const som kopplar template, användar ID, ServiceID från EmailJS
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_j0dlohj",
      "template_dk2iylf",
      toSend,
      "user_wRJCO2qIBaz4egjMD6L2E"
    )

    //console log som visar om mejl lyckats eller ej, error meddelande
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  //skickar input data med send-funktion
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //returnerar kontaktformulär med input namn, email och meddelande
  //handlechange kopplar att skicka input vid button
  return (
    <div className="contact-container">
      <div className="form-container">
      <center><h2>KONTAKTA MIG</h2></center>
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

        <button type="submit">Skicka</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
