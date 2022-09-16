import React from "react";
import { behance, facebook, dribble } from "../../images/icons";
import LinkButton from "../Shareables/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="texts">
        <h1 className="heading">
          Innovative Solution <br /> Taliored to your <br /> Business need
        </h1>
        <p className="para">
          We can partner with your business to provide a symbiotic relationship
          and synergy to help you or your business achieve more business growth
          through strategic financial advisory, investment business and human
          resource planning and management.
        </p>
        <LinkButton text="Get in touch" url="#" />

        <div className="social-icons">
          <a
            href="https://behance.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} alt="behnace" width={32} height={21} />
          </a>
          <a
            href="https://dribble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribble} alt="dribble" width={33} height={32} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" width={19} height={37} />
          </a>
        </div>
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Hero;
