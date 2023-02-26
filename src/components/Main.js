import React from "react";
import About from "./About";
import LatestLessons from "./LatestLessons";
import Cards from "./Cards";
import Form from "./Form";
import FAQ from "./FAQ";
import FAQ2 from "./FAQ2";
import CardsNew from "./CardsNew";
import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <div>
      <About />
      <Cards />
      {/* <LatestLessons /> */}
      <Form />
      {/* <FAQ /> */}

      <FAQ2 />
      <Testimonials />
      {/* <CardsNew /> */}
    </div>
  );
}
