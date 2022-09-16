import React from "react";
import {
  Hero,
  About as AboutComponent,
  Resume,
  Portfolio,
  GetInTouch,
} from "../components/About";

const About = () => {
  return (
    <>
      <Hero />
      <AboutComponent />
      <Resume />
      <Portfolio />
      <GetInTouch />
    </>
  );
};

export default About;
