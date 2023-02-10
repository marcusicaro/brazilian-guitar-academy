import React, { useState } from "react";
import styled from "styled-components";

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
  width: 100vw;
  display: none;
  flex-direction: column;
  transition: 1.5s;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  top: 60px;
  transform: translateY(${(props) => props.positionY + "%"});
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
  const [posY, setPosY] = useState(-200);
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
        <div
          onClick={() => {
            posY === -200 ? setPosY(0) : setPosY(-200);
            transformBottom.transform === "none"
              ? setTransformBottom({
                  transform: `translate(0px, -12px) rotate(45deg)`,
                })
              : setTransformBottom({
                  transform: "none",
                });
            transformTop.transform === "none"
              ? setTransformTop({
                  transform: `translate(0px, 6px) rotate(-45deg)`,
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

        <HeaderLinksMobile positionY={posY}>
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
