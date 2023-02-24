import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./cards.css"



export default function CardsNew() {
  return (
    <div>
      <div class="card">
         
         <div class="icon"><i class="material-icons md-36">face</i></div>
         <p class="newCardstitle">Profile</p>
         <p class="text">Click to see or edit your profile page.</p>
      
   </div>

   <div class="card">
      
         <div class="icon"><i class="material-icons md-36">favorite_border</i></div>
         <p class="newCardstitle">Favourites</p>
         <p class="text">Check all your favourites in one place.</p>
      
   </div>

   <div class="card">
      
         <div class="icon"><i class="material-icons md-36"><FontAwesomeIcon icon={faClock} style={{fontSize:"30px"}}/></i></div>
         <p class="newCardstitle">Contacts</p>
         <p class="text">Add or change your contacts and links.</p>
      
   </div>
    </div>

  );
}
