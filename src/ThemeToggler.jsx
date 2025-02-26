import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function ThemeToggler() {
        const {theme,toggleTheme}=useContext(ThemeContext);
    return (
    <div style={{background: theme === 'light' ? '#fff' : '#333', color:theme === 'light' ? '#000' : '#fff'}}>
        <h1>Current Theme: {theme} </h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
