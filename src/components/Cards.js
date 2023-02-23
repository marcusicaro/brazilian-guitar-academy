import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const AdvantageCardsContainer = styled.div`
  min-height: 70vh;
  max-width: 900px;
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
`;

// const AdvantageCard = styled.div`
//   background: white;
//   width: 250px;
//   height: 300px;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;
//   align-items: center;
//   padding: 2em;
// `;

const AdvantageCardTitle = styled.h4``;

const CardDescription = styled.p``;

const AdvantagesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 249, 250);
  gap: 25px;
  padding: 2em;
`;

export default function About() {
  return (
    <AdvantagesSection>
      <h1 className='titleAbout'>
        <span className='word'>Why</span>
        <span className='word'>Us</span>
      </h1>
      <AdvantageCardsContainer>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faClock} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faCoffee} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faCoffee} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faCoffee} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faCoffee} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className='advantageCard'
        >
          <FontAwesomeIcon icon={faCoffee} className='cardIcon' />
          <AdvantageCardTitle>Advantage One</AdvantageCardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae purus at dui lobortis feugiat. Sed quis aliquam nunc, sed
            bibendum mauris.
          </CardDescription>
        </motion.div>
      </AdvantageCardsContainer>
    </AdvantagesSection>
  );
}
