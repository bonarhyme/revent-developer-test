import React from "react";

const left = [
  {
    year: 2017,
    location: "Louisanna State University",
    text: "Lorem Ipseum",
  },
  {
    year: 2018,
    location: "Havard EDX",
    text: "Principles of Design",
  },
];

const right = [
  {
    year: 2019,
    location: "Udacity",
    text: "Product Design",
  },
  {
    year: 2020,
    location: "Microsoft Partner",
    text: "Platinum",
  },
];

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="heading-fancy">Resume</h2>
      <div className="actual-texts">
        <ul className="left">
          {left?.map((item, index) => {
            return (
              <li key={index}>
                <h3 className="year">{item?.year}</h3>
                <p className="location">{item?.location}</p>
                <p className="text">{item?.text}</p>
              </li>
            );
          })}
        </ul>
        <ul className="right">
          {right?.map((item, index) => {
            return (
              <li key={index}>
                <h3 className="year">{item?.year}</h3>
                <p className="location">{item?.location}</p>
                <p className="text">{item?.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
