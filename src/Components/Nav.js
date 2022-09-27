import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, transform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Hambuger from "./Hamburger";

const Nav = () => {
  const { hash } = useLocation();
  const [active, setActive] = useState(false);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  const toggleBurger = () => {
    setActive(!active);
  };

  return (
    <Title>
      <h1>
        <Link to="/" id="logo" onClick={() => scrollHandler()}>
          Enock
        </Link>
      </h1>
      <ul className="nav-Ul">
        <li>
          <Link to="#skills" smooth>
            Skills
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: hash === "#skills" ? "35%" : "0%" }}
          />
        </li>

        <li>
          <Link to="#projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: hash === "#projects" ? "35%" : "0%" }}
          />
        </li>
        <li>
          <Link to="#contact" smooth>
            Contact
          </Link>
          <Line
            transition={{ duration: 0.3 }}
            initial={{ width: "0%" }}
            animate={{ width: hash === "#contact" ? "45%" : "0%" }}
          />
        </li>
      </ul>
      <div className="hamburger" onClick={() => toggleBurger()}>
        <motion.div
          className="ham ham1"
          initial={false}
          animate={{
            transform: active ? "rotate(45deg)" : "rotate(0)",
            bottom: active ? "50%" : "0",
          }}
        ></motion.div>
        <motion.div
          className="ham ham2"
          initial={false}
          animate={{
            opacity: active ? "0" : "1",
            transform: active ? "translateX(10px)" : "translateX(0)",
          }}
        ></motion.div>
        <motion.div
          className="ham ham3"
          initial={false}
          animate={{
            transform: active ? "rotate(-45deg)" : "rotate(0)",
            bottom: active ? "50%" : "0",
          }}
        ></motion.div>
      </div>
      <Hambuger active={active} setActive={setActive} />
    </Title>
  );
};

export default Nav;

const Title = styled.div`
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  background: #c3f1fb;

  justify-content: space-evenly;
  position: sticky;
  top: 0;
  z-index: 5;
  overflow-x: hidden;
  h1 {
    flex: 1;
  }
  a {
    color: #434040;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
  }
  ul {
    display: flex;
    list-style: none;
    flex: 1;
  }
  li {
    padding-left: 10rem;
    font-size: 1.3rem;
    position: relative;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-size: 2rem;
    font-weight: lighter;

    cursor: pointer;
  }
  .hamActive {
  }
  @media (max-width: 936px) {
    .nav-Ul {
      display: none;
    }
    .hamburger {
      position: absolute;
      top: 5;
      right: 2rem;
      z-index: 10;
      .ham {
        margin: 0.3rem;
        cursor: pointer;
        background: black;
        width: 2rem;
        height: 0.25rem;
        transform-origin: 1px;
        border-radius: 10px;
        transition: all 0.3s linear;
      }
    }
  }
`;

const Line = styled(motion.div)`
  width: 5%;
  height: 0.3rem;
  background: #b1bec1;
  position: absolute;
  bottom: -70%;
`;
