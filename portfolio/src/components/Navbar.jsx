import "../App.css";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, Element } from "react-scroll";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);

  // Function to determine the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight - 50
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MENU ICON DROPDOWN HOOK

  const [menu, setMenu] = useState({ clicked: false });
  const handleMenuClick = () => {
    setMenu({ clicked: !menu.clicked });
  };

  return (
    <section id="home">
      <div id="header">
        <img className="Logo" src="./assets/Logo.png" alt="Logo" />
        <nav
          className={menu.clicked ? "DesktopNavbar active" : "DesktopNavbar"}
        >
          <ul
            id="navbar"
            className={menu.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`FontNavbar ${activeSection === "home" && "active"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`FontNavbar ${activeSection === "about" && "active"}`}           
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={`FontNavbar ${activeSection === "skills" && "active"}`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`FontNavbar ${activeSection === "projects" && "active"}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`FontNavbar ${activeSection === "contact" && "active"}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          {menu.clicked ? (
            <span
              onClick={handleMenuClick}
              className="material-symbols-outlined"
              id="icon_close"
            >
              close
            </span>
          ) : (
            <span
              onClick={handleMenuClick}
              className="material-symbols-outlined"
              id="icon_menu"
            >
              menu
            </span>
          )}
        </nav>
      </div>
    </section>
  );
}
