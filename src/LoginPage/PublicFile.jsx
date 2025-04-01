import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import "./style.css";

function PublicFile() {
   const {username, password, setUsername,setPassword,LogIn} = useContext(AuthContext)
   
  return (
    <div className="page" >
      <h1>Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        placeholder="username"
      /> <br />
      <input
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder="password"
      /> <br />
      <button onClick={LogIn} >Login</button>
    </div>
  );
}

export default PublicFile;
