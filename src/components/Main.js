import React from "react";
import About from "./About";
import LatestLessons from "./LatestLessons";
import Cards from "./Cards";

export default function Main() {
  return (
    <div>
      <About />
      <Cards />
      <LatestLessons />
    </div>
  );
}
