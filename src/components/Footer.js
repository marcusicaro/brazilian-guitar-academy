import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  background: #121212;
  // padding: 2em;
  justify-content: space-around;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Links = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-around;
  // gap: 20px;
`;

const LinksText = styled.div`
  cursor: pointer;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Social style={{ fontSize: "25px", color: "#ffffff" }}>
        <FontAwesomeIcon style={{cursor: "pointer"}} icon={faInstagram} className='iconHeader' />
        <FontAwesomeIcon style={{cursor: "pointer"}} icon={faWhatsapp} className='iconHeader' />
      </Social>
      <Links style={{ color: "#ffffff" }}>
        <LinksText>Terms of condition</LinksText>
        <LinksText>Imprint</LinksText>
        <LinksText>Terms & Conditions</LinksText>
      </Links>
    </FooterContainer>
  );
}
