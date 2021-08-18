import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <h1>
      <Link
        className="title"
        to={{
          pathname: "/",
        }}
      >
        Job Buddy
      </Link>
    </h1>
  );
};

export default Header;
