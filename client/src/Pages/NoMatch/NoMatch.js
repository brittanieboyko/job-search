import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h2>The page does not exist</h2>
      <Button variant="light">
        <Link to="/">Go to Home Page</Link>
      </Button>
    </>
  );
}

export default NoMatch;