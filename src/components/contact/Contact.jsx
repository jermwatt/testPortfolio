import { Message } from "@material-ui/icons";
import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    setMessage(true);
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2> Contact </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Submit</button>
          {message && <span>Thanks! I will reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
}
