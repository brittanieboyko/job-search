import React from "react";
import { Button } from 'evergreen-ui';
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h2>The page does not exist</h2>
      <Button>
        <Link to="/">Go to Home Page</Link>
      </Button>
    </>
  );
}

export default NoMatch;