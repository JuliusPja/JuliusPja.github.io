import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

// import { useState } from "react";

export default function Home() {

  return (
    <div>
      <Navbar />
      <main>
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </main>
    </div>
  );
}
