import React, { useState } from "react";
import { useEffect } from "react";
import { typeOfPortfolio, listOfportfolio } from "./data";

const Portfolio = () => {
  const [portfolioType, setPortfolioType] = useState("all");
  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    if (portfolioType === "all") {
      setPortfolioList(listOfportfolio);
    } else {
      const filtered = listOfportfolio.filter(
        (port) => port.type === portfolioType
      );

      setPortfolioList(filtered);
    }
  }, [portfolioType]);

  return (
    <section className="portfolio">
      <h2 className="heading-fancy small-margin">Portfolio</h2>
      <div className="actual-texts">
        <ul className="portfolio-nav-list">
          {typeOfPortfolio?.map((tyOfPo, index) => {
            return (
              <li
                key={index}
                className={`single-item ${
                  tyOfPo === portfolioType && "active"
                }`}
                onClick={() => setPortfolioType(tyOfPo)}
              >
                {tyOfPo}
              </li>
            );
          })}
        </ul>

        <div className="portfolio-list">
          {portfolioList?.length > 0 &&
            portfolioList?.map((port, index) => {
              return (
                <div key={index} className="single-portfolio">
                  <img
                    src={port?.image}
                    title={port?.title}
                    width={343}
                    height={413}
                    alt={port?.title}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
