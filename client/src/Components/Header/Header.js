import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Button variant="link" className="title">
      <Link
        className="title"
        to={{
          pathname: "/",
        }}
      >
        Job Buddy
      </Link>
    </Button>
  );
};

export default Header;
