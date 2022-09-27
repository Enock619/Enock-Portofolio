import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
const Hambuger = ({ active, setActive }) => {
  const { pathname } = useLocation();

  const linkHandler = () => {
    setActive(!active);
  };

  return (
    <Ham className="ham">
      <div className={`menu ${active ? "active-menu" : ""}`}>
        <ul>
          <li>
            <Link to="#skills" smooth onClick={() => linkHandler()}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth onClick={() => linkHandler()}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth onClick={() => linkHandler()}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </Ham>
  );
};

const Ham = styled.div`
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 30rem;
    height: 100%;
    background: #b1bec1;
    transform: translateX(-400%);
    transition: all 0.5s ease;
    opacity: 0;
    border: none;
  }
  .active-menu {
    transform: translate(0%);
    opacity: 1;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 10rem 1rem;
  }
  li {
    padding: 2rem;
    text-align: center;
  }
  @media (max-width: 936px) {
    ul {
      display: flex;
    }
    li {
      text-align: center;
    }
  }
`;

export default Hambuger;
