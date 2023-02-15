import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const [showText, setShowText] = useState('none')

  return (
    <div className='aboutContainer'>
      <h2 className='titleAbout'>
        <span className='word'>About</span>
        <span className='word'>Us</span>
      </h2>
      <div className='aboutContent'>
        <div className='insideBox'>
          <div className='aboutText'>
            <p>
              The Brazilian Guitar Academy is your portal on the internet for
              the brazilian guitar secrets. Here you'll find different courses
              for the different styles and musical genres played in Brazil.{" "}
              <b>
                Bossa Nova, Samba accompainment, 7-stringed guitar and music
                theory
              </b>{" "}
              are some of the courses you'll find as soons as you join this
              family. <br />
              <br />
              </p>
              <button 
              onClick={() => {showText === 'block' ? setShowText('none') : setShowText('block') }}>Show more</button>
              <div style={{display: showText, height:0 }}>   
              Every course comes with rhythm lessons for you to learn the
              different ways to play
              <b>
                {" "}
                samba, bossa nova, forró, and all the genres that we are going
                to play.
              </b>           
               Talking about brazilian music is talking about rhythm and that's
              a subject that the Brazilian Guitar Academy handles very
              carefully. It is important that you sound like a brazilian guitar
              player. <br />
              <br />
              By the way, all the 7 Stringed guitar courses are adapted for 6
              stringed guitar. <b>Watch it anywhere, anytime, in any order!</b>
              Welcome to the Brazilian Guitar Academy!
              </div>


          </div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            className='aboutPicture'
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
