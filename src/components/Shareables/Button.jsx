import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({
  url = "#",
  text = "Get in touch",
  button = false,
  buttonType = "",
}) => {
  return (
    <div className="link-button">
      {button ? (
        <button type={buttonType}>{text}</button>
      ) : (
        <Link to={url}>{text}</Link>
      )}
    </div>
  );
};

export default LinkButton;
