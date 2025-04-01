import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = () => {
    setUser({ username, password });
  };

  const isLogedIn = () => {
    if (user != null) return true;
    else return false;
  };

  const logOut = ()=>{
    setUser(null);
    setUsername(null);
    setPassword(null);
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        LogIn,
        isLogedIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
