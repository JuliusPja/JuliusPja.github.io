import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

// import { useState } from "react";


export default function Home(){

  // const [currentView, setCurrentView] = useState('view'); // Initial view

  // const changeView = (view) => {
  //   setCurrentView(view);
  // };

  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
  
    </div>
  )
}