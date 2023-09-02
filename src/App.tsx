import { NavLink, Route, Routes } from "react-router-dom"
import { JsPowerHeader } from "./components/JsPowerHeader/JsPowerHeader"
import { JsPower } from "./components/JsPower/JsPower"


function App() {

  return (
   <div>
      <NavLink to="/JsPower"><JsPowerHeader/></NavLink>
      
   </div>
  )
}

export default App
