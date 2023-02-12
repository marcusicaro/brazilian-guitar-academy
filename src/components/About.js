import React from "react";

export default function About() {
  return (
    <div className='aboutContainer'>
      <h1 className='titleAbout'>
        <span className='word'>About</span>
        <span className='word'>Us</span>
      </h1>
      <div className='aboutContent'>
        <div className='insideBox'>
          <div className='aboutText'>
            <p>
              ​   The Brazilian Guitar Academy is your portal on the internet
              for the brazilian guitar secrets. Here you'll find different
              courses for the different styles and musical genres played in
              Brazil. <b>Bossa Nova, Samba</b> accompainment, 7-stringed guitar
              and music theory are some of the courses you'll find as soons as
              you join this family. <br />
              <br />
                 Every course comes with rhythm lessons for you to learn the
              different ways to play
              <b>
                {" "}
                samba, bossa nova, forró, and all the genres that we are going
                to play
              </b>
              . Talking about brazilian music is talking about rhythm and that's
              a subject that the Brazilian Guitar Academy handles very
              carefully. It is important that you sound like a brazilian guitar
              player. <br />
              <br />
                 By the way, all the 7 Stringed guitar courses are adapted for 6
              stringed guitar. <b>Watch it anywhere, anytime, in any order!</b>
               Welcome to the Brazilian Guitar Academy!
            </p>
          </div>
          <div className='aboutPicture'></div>
        </div>
      </div>
    </div>
  );
}
