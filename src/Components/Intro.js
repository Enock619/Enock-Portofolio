import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import enock from "../Img/enock.jpg";
import linkedin from "../Img/Icon/linkedin.png";
import instagram from "../Img/Icon/instagram.png";
import facebook from "../Img/Icon/facebook.png";
import Wave from "./Wave";
import { useScroll } from "./useScroll";

//Animations
import { photoAnim, fade, titleAnim } from "./Animations";

const Intro = () => {
  const [element, controls] = useScroll();

  return (
    <IntroDiv variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <motion.h2 variants={titleAnim}>Hi There!</motion.h2>
        <motion.h2 variants={titleAnim}>
          I'm <span>Enock Omweno</span>
        </motion.h2>
        <motion.h3 variants={titleAnim}>Front end Developer</motion.h3>
        <Icon variants={titleAnim}>
          <li>
            <a href="https://www.linkedin.com/in/enockomweno" target="_blank">
              <img src={linkedin} alt="Linkedn" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/enock619/">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
        </Icon>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={enock} alt="Enock's Photo" />
      </Image>
      <Wave />
    </IntroDiv>
  );
};

export default Intro;

const IntroDiv = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  padding: 0.5rem 10rem;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    color: black;
    span {
      color: #8ed4e3;
    }
  }
  @media (max-width: 687px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 525px) {
    h2 {
      padding-left: 3rem;
    }
    h3 {
      padding-left: 3rem;
    }
  }
  @media (max-width: 447px) {
    h2 {
      padding-left: 6rem;
      font-size: 2rem;
    }
    h3 {
      padding-left: 6rem;
    }
  }
  @media (max-width: 350px) {
    h2 {
      padding-right: 1rem;
    }
  }
`;
const Description = styled(motion.div)`
  flex: 1;
  padding-right: 5rem;
  margin-bottom: 7rem;
  text-align: center;
`;
const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;

  img {
    height: 100%;
    width: 110%;
  }
  @media (max-width: 603px) {
    img {
      scale: 1.5;
    }
  }
  @media (max-width: 500px) {
    img {
      scale: 2;
    }
  }
  @media (max-width: 447px) {
    img {
      scale: 3.5;
      margin-bottom: 15rem;
    }
  }
`;

const Icon = styled(motion.div)`
  display: flex;
  padding: 0rem 10rem;
  align-items: center;

  li {
    padding: 1rem 1.5rem;
    list-style: none;
  }
`;
