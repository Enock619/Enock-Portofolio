import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import phoneIcon from "../Img/Icon/phone.svg";
import emailIcon from "../Img/Icon/email.svg";
import linkedinIcon from "../Img/Icon/linkedin.png";
import facebookIcon from "../Img/Icon/facebook.png";
import { useScroll } from "./useScroll";
import { fade, titleAnim } from "./Animations";
import Footer from "./Footer";

const Contact = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <MainDiv
      id="contact"
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <motion.div
        variants={titleAnim}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h4>LET'S TALK</h4>
        <h2>Ways To Contact Me</h2>
        <ContactDiv>
          <a href="mailto:enock619.eo@gmail.com?" target="_blank">
            <Info>
              <img src={emailIcon} alt="" />
              enock619.eo@gmail.com
            </Info>
          </a>
          <Info>
            <img src={phoneIcon} alt="" />
            +1 715-914-0053
          </Info>

          <a href="https://www.linkedin.com/in/enockomweno" target="_blank">
            <Info>
              <img src={linkedinIcon} alt="" />
              Enock Omweno
            </Info>
          </a>
        </ContactDiv>
      </motion.div>
      <Footer />
    </MainDiv>
  );
};
const MainDiv = styled(motion.div)`
  overflow-x: hidden;
  min-height: 70vh;

  h4 {
    margin-top: 5rem;
    text-align: center;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
  }
  h2 {
    padding: 1rem;
    text-align: center;
    font-size: 2.5rem;
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 447px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: black;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  background: #b1bec1;
  padding: 2rem;
  margin-top: 5rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  font-family: "poppins", sans-serif;
  font-weight: light;
  cursor: pointer;
  img {
    padding-right: 0.5rem;
  }
  &:hover {
    background: #c3f1fb;
  }
  @media (max-width: 447px) {
    font-size: 1rem;
  }
`;

export default Contact;
