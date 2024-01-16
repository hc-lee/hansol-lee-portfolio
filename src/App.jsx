import React from 'react';
import './App.css';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import MyNavbar from "./components/MyNavbar.jsx";
import Skills from "./components/Skills.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";


function App() {

  return (
    <>
        <MyNavbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/*<div className="construction-placeholder">*/}
        {/*    <img src="/icons/construction.svg" alt="construction" width={100} height={100}/>*/}
        {/*    <h3>Under Construction (1/07/24)</h3>*/}
        {/*</div>*/}
    </>
  )
}

export default App
