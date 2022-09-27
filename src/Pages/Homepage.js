import React from "react";
import Nav from "../Components/Nav";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const homepage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default homepage;
