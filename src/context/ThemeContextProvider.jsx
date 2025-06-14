import {createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  let [theme,setTheme] = useState('light')

  const toggleTheme = ()=>{
    setTheme(
      theme === 'light' ? 'dark' : 'light'
    )
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider