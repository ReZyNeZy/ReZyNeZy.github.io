//src/App.js

//javascript imports and react import

import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonial from "./components/Testimonial"

export default function App() {
      return(
  
          <main className = "text-gray-400 bg-gray-90 boyd-font">
              <Navbar />
              <About /> 
              <Projects />
              <Skills />
              <Testimonial />
              <Contact />
          </main>
  
      );
  }

