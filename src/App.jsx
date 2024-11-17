import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
// import Project from './pages/Project/Project'
import Contact from "./pages/Contact/Contact";
import Header from "./Header/Header";

function App() {
  return (
    <div className="">
      <Header/>
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
