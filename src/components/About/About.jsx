import React from "react";
import LinkButton from "../Shareables/Button";

const About = () => {
  return (
    <section className="about-us">
      <h2 className="heading-fancy">About Us</h2>
      <div className="actual-texts">
        <div className="left-side"></div>
        <div className="texts">
          <h3 className="heading-sm">We focus on value and excellence</h3>
          <p className="para">
            We are focused on providing products which deliver{" "}
            <br className="hide-in-sm" /> demonstrably good value for our
            clients and <br className="hide-in-sm" /> end-customers - be that a
            specific return,
            <br className="hide-in-sm" />
            outperforming an index or achieving returns at lower{" "}
            <br className="hide-in-sm" /> risk.
            <br />
            <br />
            Through achieving value for the clients whose assets we{" "}
            <br className="hide-in-sm" /> manage, efficiently controlling costs,
            effectiveness and
            <br className="hide-in-sm" /> efficiency, we deliver value to our
            shareholders and <br className="hide-in-sm" />
            wider stakeholders
          </p>
          <br />
          <LinkButton text="Work with Us" url="#" />
        </div>
      </div>
    </section>
  );
};

export default About;
