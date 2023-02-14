import React from "react";
import About from "./About";
import LatestLessons from "./LatestLessons";
import Cards from "./Cards";
import Form from "./Form";

export default function Main() {
  return (
    <div>
      <About />
      <Cards />
      {/* <LatestLessons /> */}
      <Form />
    </div>
  );
}
