import { NavLink } from "react-router-dom";
import { JsPowerHeader } from "./components/JsPowerHeader/JsPowerHeader";
import './interface.sass';
import { PhotoBlock } from "./components/PhotoBlock/PhotoBlock";
import { ScreencastBlock } from "./components/ScreencastBlock/ScreencastBlock";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import { GitBlock } from "./components/GitBlock/GitBlock";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from "react";
import {gsapMain} from './utils/gsap/gsapMain';


function App() {

  useEffect(() => {
    gsapMain();
  },[])

  return (
   <div className="grid-wrapper">
      <NavLink to="/JsPower" className="JsPowerHeader"><JsPowerHeader/></NavLink>
      <PhotoBlock/>
      <ScreencastBlock/>
      <InfoBlock/>
      <GitBlock/>
      <Footer/>
   </div>
  )
}

export default App
