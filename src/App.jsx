import React from 'react';
import './App.css';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import MyNavbar from "./components/MyNavbar.jsx";
import Skills from "./components/Skills.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects.jsx";

function App() {

  return (
    <>
        <MyNavbar />
        <Home />
        <About />
        <Skills />
        <Projects />
    </>
  )
}

export default App
