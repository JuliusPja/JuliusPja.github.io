import "../App.css"
import "./Navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

  // MENU ICON DROPDOWN HOOK

  const [menu, setMenu] = useState({clicked: false});
  const handleMenuClick = () => {
    setMenu({clicked: !menu.clicked})
  };

  return(
    <>
      
 
      <div id="header">
        <img className="Logo" src="./assets/Logo.png" alt="Logo" />
              <nav className={menu.clicked ? 
              "DesktopNavbar active" : "DesktopNavbar"}>
                  <ul 
                  id="navbar"
                  className={menu.clicked ? 
                  "#navbar active" : "#navbar"}>
                    <li>
                      <Link to="/" className="FontNavbar active">Home</Link>
                    </li>
                    <li>
                      <Link to="/about" className="FontNavbar">About</Link>
                    </li>
                    <li>
                      <Link to="/skills" className="FontNavbar">Skills</Link>
                    </li>
                    <li>
                      <Link to="/projects" className="FontNavbar">Projects</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="FontNavbar">Contact</Link>
                    </li>
                  </ul>
                  {menu.clicked ? 
              <span onClick={handleMenuClick} 
              className="material-symbols-outlined" id="icon_close">close</span> 
              : 
              <span onClick={handleMenuClick} className="material-symbols-outlined" 
                id="icon_menu">menu</span>
                }
              </nav> 
      </div>


    </>
  )
}