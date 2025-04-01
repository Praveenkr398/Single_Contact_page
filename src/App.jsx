import "./App.css";
import PrivateFile from "./LoginPage/PrivateFile";
import PublicFile from "./LoginPage/PublicFile";
import { AuthContext } from "./LoginPage/AuthContext";
import { useContext } from "react";

import UserContextProvider from "./ContactPage/context/UserContextProvider";
import MessageBox from "./ContactPage/component/MessageBox";
import Contact from "./ContactPage/component/Contact";
import ThemeProvider from "./themePage/ThemeContext";
import ThemePage from "./themePage/ThemePage";

function App() {

  // for Theme page 
  // return (
  //   <ThemeProvider>
  //     <ThemePage />
  //   </ThemeProvider>
  // );

  // for login page
  // const { isLogedIn } = useContext(AuthContext);
  // return(
  // <div className="bg-amber-100 text-2xl p-5 m-5 border-2 w-md">
  //   {isLogedIn() ? <PrivateFile /> : <PublicFile />}
  // </div>
  // );

  // for contact us page
  return (
    <div className="box">
      <UserContextProvider>
        <Contact />
        <MessageBox />
      </UserContextProvider>
    </div>
  );
}

export default App;
