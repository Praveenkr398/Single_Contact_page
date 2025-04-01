import React, { useState } from "react";
import "./Contact.css";
import "./box.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Contact() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setUser({ username, subject, message });
  };
  const resetHandle = (e) => {
    e.preventDefault();
   setUser(null)
    setUsername('')
    setSubject('')
    setMessage('')
  };

  return (
    <div className="contactPage">
      <h1 className="heading">Contact us</h1>

      <form>
        <input
          type="text"
          placeholder="your full name"
          value={username}
          required
          // name="username"
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(e.target.value);
          }}
        />
        <input
          type="text"
          // name="subject"
          value={subject}
          required
          onChange={(e) => {
            setSubject(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="subject"
        />
        <textarea
          // name="message"
          value={message}
          required="required"
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="write your message"
        ></textarea>

        <div className="btns">
          <button onClick={submitHandle} type="submit">
            Send &#128432;
          </button>
          <button onClick={resetHandle} type="reset">&#128959;</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
