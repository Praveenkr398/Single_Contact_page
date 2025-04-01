import React from 'react'
import './theme.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemePage() {
    const {theme,changeTheme} = useContext(ThemeContext)
  return (
    <div className="bg" style={{backgroundColor:theme == "Light"?'white':'black'}}>
        <div className="theme">
            <h1>Theme Page</h1>
            <button onClick={changeTheme}>{theme} Mode </button>
        </div>
    </div>
  )
}

export default ThemePage