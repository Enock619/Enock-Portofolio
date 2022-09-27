import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <p>
        <span>&copy;2022 OMWENO </span> <br /> ALL RIGHTS RESERVED
      </p>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  p {
    font-size: 0.8rem;
    text-align: right;
    padding: 6rem;

    span {
      margin-left: 2.5rem;
    }
  }
`;
export default Footer;
