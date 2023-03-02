import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 0 2em 0 2em;
  height: 65px;
  position: relative;
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const HeaderLinksMobile = styled.div`
  width: 100vw;
  max-height: ${(props) => props.maxHeight + "px"};
  height: 300px;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  z-index: -1;
  left: 0;
  top: 60px;
  display: flex;
  justify-content: center;
  gap: 2em;
  overflow: hidden;
`;

const HamburgerIconsDiv = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 25px;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  box-shadow: none;
`;

const Social = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  & {
    height: min-content;
    margin-top: auto;
    margin-bottom: auto;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 5px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(
      45deg,
      rgb(46, 164, 79) 25%,
      rgb(80, 200, 100) 51%,
      rgb(46, 164, 79) 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function Header() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [transformBottom, setTransformBottom] = useState({
    transform: "none",
  });
  const [transformMiddle, setTransforMiddle] = useState({
    opacity: 1,
  });
  const [transformTop, setTransformTop] = useState({
    transform: "none",
  });

  return (
    <Container>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={require("./images/logo.png")} style={{ height: "50px" }} />
        </div>
        <Button>Sign Up</Button>
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>


          <Social>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "20px", cursor: "pointer" }}
              className='iconHeader'
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "20px", cursor: "pointer" }}
              className='iconHeader'
            />
          </Social>

          <HamburgerContainer>
            <div
              onClick={() => {
                maxHeight === 0 ? setMaxHeight(400) : setMaxHeight(0);
                transformBottom.transform === "none"
                  ? setTransformBottom({
                      transform: `translate(0px, -10px) rotate(45deg)`,
                    })
                  : setTransformBottom({
                      transform: "none",
                    });
                transformTop.transform === "none"
                  ? setTransformTop({
                      transform: `translate(0px, 8px) rotate(-45deg)`,
                    })
                  : setTransformTop({
                      transform: "none",
                    });
                transformMiddle.opacity === 1
                  ? setTransforMiddle({ opacity: 0 })
                  : setTransforMiddle({ opacity: 1 });
              }}
            >
              <HamburgerIconsDiv style={transformTop} />
              <HamburgerIconsDiv className='barTwo' style={transformMiddle} />
              <HamburgerIconsDiv className='barThree' style={transformBottom} />
            </div>

            <HeaderLinksMobile maxHeight={maxHeight}>
              <div className='headerLink firstLink'>courses</div>
              <div className='headerLink'>book a lesson</div>
              <div className='headerLink'>shop</div>
              <div className='headerLink'>contact</div>
              <div className='headerLink lastLink'>login</div>
            </HeaderLinksMobile>
          </HamburgerContainer>
        </div>
      </HeaderContainer>
    </Container>
  );
}
