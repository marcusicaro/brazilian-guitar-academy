import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import YoutubeEmbed from "./YoutubeEmbed";

export default function About() {
  const [showText, setShowText] = useState("none");

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
              onClick={() => {
                showText === "block"
                  ? setShowText("none")
                  : setShowText("block");
              }}
            >
              learn more
            </button>
          </div>
          <div>
            <YoutubeEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
