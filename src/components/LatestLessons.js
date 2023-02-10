import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  height: 350px;
  width: 250px;
  background-color: green;
  border-radius: 40px;
  overflow: hidden;
  text-decoration: none;
  position: relative;
  display: block;
  &:hover .cardOverlay {
    transform: translateY(0);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardOverlay = styled.div`
  background-color: white;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
  border-top: 1px solid white;
`;

const CardHeader = styled.div`
  z-index: 999;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: 40px 0 0 0;
  background-color: white;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

export default function LatestLessons() {
  return (
    <div>
      <TitleContainer>
        <h2>LATEST LESSONS</h2>
        <h4>Our latest lessons</h4>
      </TitleContainer>
      <CardsContainer>
        <Card>
          <CardImage></CardImage>
          <CardOverlay className='cardOverlay'>
            <CardHeader>
              <svg
                className='card__arc'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  zIndex: "1",
                }}
              >
                <path
                  style={{
                    fill: "white",
                    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
                  }}
                />
              </svg>
              <img
                className='card__thumb'
                src='https://i.imgur.com/7D7I6dI.png'
                alt=''
                style={{
                  flexShrink: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginBottom: "-2px",
                }}
              />
            </CardHeader>
          </CardOverlay>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardsContainer>
    </div>
  );
}
