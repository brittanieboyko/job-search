import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Button>
      <Link
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
