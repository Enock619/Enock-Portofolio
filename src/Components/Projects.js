import React from "react";
import { useState } from "react";
import ProjectState from "../ProjectState";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade, photoAnim } from "./Animations";

const Projects = () => {
  const [project, setProject] = useState(ProjectState);
  const [element, controls] = useScroll();

  return (
    <MainWrapper
      id="projects"
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2>My Work</h2>
      <ProjectWrapper>
        <ProjectDiv>
          <h3>{project[0].title}</h3>
          <ImgDiv>
            <a href={project[0].link} target="_blank">
              <motion.img
                variants={photoAnim}
                src={project[0].img}
                alt="project image"
              />
            </a>
          </ImgDiv>
        </ProjectDiv>
        <ProjectDiv>
          <h3>{project[1].title}</h3>
          <ImgDiv>
            <a href={project[1].link} target="_blank">
              <motion.img
                variants={photoAnim}
                src={project[1].img}
                alt="project image"
              />
            </a>
          </ImgDiv>
        </ProjectDiv>
      </ProjectWrapper>
    </MainWrapper>
  );
};
const MainWrapper = styled(motion.div)`
  h2 {
    text-align: center;
  }
`;
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 3rem 0rem;
  flex-wrap: wrap;
`;

const ProjectDiv = styled.div`
  padding: 0rem 2rem;
  h3 {
    padding: 1.5rem;
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;

const ImgDiv = styled(motion.div)`
  img {
    width: 100%;
    height: 100%;
    &:hover {
      scale: 1.1;
    }
  }
`;
export default Projects;
