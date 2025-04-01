import { useContext } from "react";
import React from "react";
import "./box.css";
import UserContext from "../context/UserContext";

function MessageBox() {
  const { user } = useContext(UserContext);

  if (!user) return (
    <div className="messageBox">
    <h1>Your Message</h1>
    <h2>&#128233;</h2>
  </div>
  )
  return (
    <div className="messageBox">
      <h1>Your Message</h1>
      <div className="message">
        <ul>
          <li>
            UserName: <span>{user.username}</span>{" "}
          </li>
          <li>
            Subject:<span>{user.subject}</span>{" "}
          </li>
          <li className="msg">
            <h4>Message</h4>
            <p>{user.message}</p>
          </li>
        </ul>
        <div className="emoji"></div>
      </div>
    </div>
  );
}

export default MessageBox;
