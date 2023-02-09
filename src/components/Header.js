import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeaderLinksMobile = styled.div`
  width: 300px;
  height: 100vh;
  display: none;
  flex-direction: column;
  transition: 1.5s;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 60px;
  transform: translateX(${(props) => props.positionX + "%"});
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIconsDiv = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 25px;
`;

export default function Header() {
  const [posX, setPosX] = useState(150);

  const transformBottom = {
    transform: `translate(-6px, -12px) rotate(45deg)`,
  };
  const transformTop = {
    transform: `translate(-6px, 6px) rotate(-45deg)`,
  };

  return (
    <HeaderContainer>
      <div>Logo</div>
      <HeaderLinks>
        <div>courses</div>
        <div>book a lesson</div>
        <div>shop</div>
        <div>contact</div>
        <div>login</div>
      </HeaderLinks>
      <HamburgerContainer>
        <div onClick={() => (posX === 150 ? setPosX(-50) : setPosX(150))}>
          <HamburgerIconsDiv style={transformTop} />
          <HamburgerIconsDiv className='barTwo' style={{ opacity: "0" }} />
          <HamburgerIconsDiv className='barThree' style={transformBottom} />
        </div>

        <HeaderLinksMobile positionX={posX}>
          <div>courses</div>
          <div>book a lesson</div>
          <div>shop</div>
          <div>contact</div>
          <div>login</div>
        </HeaderLinksMobile>
      </HamburgerContainer>
    </HeaderContainer>
  );
}
