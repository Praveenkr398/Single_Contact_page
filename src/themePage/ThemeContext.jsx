import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('Light')

    const changeTheme = ()=>{
        const currentTheme = theme == "Light"?"Dark":"Light";
        setTheme(currentTheme)
    }
    return(
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;