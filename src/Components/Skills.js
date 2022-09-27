import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//icons
import cssIcon from "../Img/Icon/css.svg";
import htmlIcon from "../Img/Icon/html.svg";
import JsIcon from "../Img/Icon/js.svg";
import reactIcon from "../Img/Icon/react.svg";
import nodejsIcon from "../Img/Icon/nodejs.svg";
import reduxIcon from "../Img/Icon/redux.svg";
import gitIcon from "../Img/Icon/git.svg";
import sassIcon from "../Img/Icon/sass.svg";
import { fade, SkillsAnim, SkillsAnim2 } from "./Animations";
import { useScroll } from "./useScroll";

const Skills = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <MainWrapper
      id="skills"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>SKILLS</h2>
      <IconWrapper>
        <motion.div
          variants={SkillsAnim}
          animate={controls2}
          initial="hidden"
          ref={element2}
        >
          <SkillWrapper>
            <ImgDiv>
              <img src={htmlIcon} alt="html icon" />
            </ImgDiv>
            <h5>Html</h5>
          </SkillWrapper>
          <SkillWrapper>
            <ImgDiv>
              <img src={cssIcon} alt="css icon" />
            </ImgDiv>
            <h5>Css</h5>
          </SkillWrapper>
        </motion.div>
        <motion.div
          variants={SkillsAnim}
          animate={controls2}
          initial="hidden"
          ref={element2}
        >
          <SkillWrapper>
            <ImgDiv>
              <img src={JsIcon} alt="js icon" />
            </ImgDiv>
            <h5>Javascript</h5>
          </SkillWrapper>
          <SkillWrapper>
            <ImgDiv>
              <img src={reactIcon} alt="react icon" />
            </ImgDiv>
            <h5>React</h5>
          </SkillWrapper>
        </motion.div>
        <motion.div
          variants={SkillsAnim2}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className="row2"
        >
          <SkillWrapper>
            <ImgDiv>
              <img src={nodejsIcon} alt="nodejs icon" />
            </ImgDiv>
            <h5>Node</h5>
          </SkillWrapper>
          <SkillWrapper>
            <ImgDiv>
              <img src={reduxIcon} alt="redux icon" />
            </ImgDiv>
            <h5>Redux</h5>
          </SkillWrapper>
        </motion.div>
        <motion.div
          variants={SkillsAnim2}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className="row2"
        >
          <SkillWrapper>
            <ImgDiv>
              <img src={gitIcon} alt="git icon" />
            </ImgDiv>
            <h5>Git</h5>
          </SkillWrapper>
          <SkillWrapper>
            <ImgDiv>
              <img src={sassIcon} alt="sass icon" />
            </ImgDiv>
            <h5>Sass</h5>
          </SkillWrapper>
        </motion.div>
      </IconWrapper>
    </MainWrapper>
  );
};

//styling

const MainWrapper = styled(motion.div)`
  overflow-x: hidden;
  h2 {
    padding-top: 3.5rem;
    text-align: center;
    font-family: "Inter", sans-serif;
    flex-wrap: wrap;
  }
  h5 {
    font-family: "DM Sans", sans-serif;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5rem 0rem;
  flex-wrap: wrap;
  h5 {
    padding: 1rem 0rem;
    color: #7f7f7f;
  }
  .row2 {
    padding-bottom: 0.5rem;
  }
`;
const SkillWrapper = styled.div`
  text-align: center;
  padding: 1rem;

  @media (max-width: 548px) {
    padding: 1rem;
  }
  @media (max-width: 414px) {
    padding: 1rem;
    justify-content: center;
  }
  @media (max-width: 375px) {
    padding: 0.5rem;
  }
`;

const ImgDiv = styled.div`
  background: #fef4f5;
  padding: 1rem;
  border-radius: 50%;
  text-align: center;
  img {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 548px) {
    padding: 0.7rem;
  }
  @media (max-width: 414px) {
    align-items: center;

    img {
      width: 70%;
      height: 70%;
    }
  }
`;
export default Skills;
