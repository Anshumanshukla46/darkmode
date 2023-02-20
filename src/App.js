import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"

export default function App() {

  const [dark, setDark] = React.useState(false);

  function change() {
    setDark(old => {
      return !old
    })
  }

  return (
    <div className="container">
      <Navbar
        darkMode={dark}
        toggleDarkMode={change}
      />

      <Main
        darkMode={dark}
      />
    </div>
  )
}