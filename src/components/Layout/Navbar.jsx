import React, { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../images";

const navLinkDetails = [
  {
    text: "About Us",
    url: "/",
  },
  {
    text: "Portfolio",
    url: "/portfolio",
  },
  {
    text: "Experience",
    url: "/experience",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const handleNavOpen = () => {
    setNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <div className="logo-nav-menu">
        <div className="logo-container">
          <img
            src={logo}
            width={226}
            height={92}
            alt="Revent logo"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="nav-menu-bar">
          {navOpen ? (
            <FaBars
              color="white"
              size={30}
              className="cursor-pointer"
              onClick={handleNavOpen}
            />
          ) : (
            <FaTimes
              color="white"
              size={30}
              className="cursor-pointer"
              onClick={handleNavOpen}
            />
          )}
        </div>
      </div>
      <div className={`nav-links ${navOpen && "open-sm"}`}>
        {navLinkDetails?.map((link) => {
          return (
            <Link
              key={link?.text}
              to={link?.url}
              className="nav-link"
              style={{
                color: currentUrl === link?.url ? "#fce82f" : "#ffffff",
              }}
            >
              {link?.text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
