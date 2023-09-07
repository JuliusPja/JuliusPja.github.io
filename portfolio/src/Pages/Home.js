import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home(){

  // const [currentView, setCurrentView] = useState('view1'); // Initial view

  // const changeView = (view) => {
  //   setCurrentView(view);
  // };

  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}