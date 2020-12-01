import React from 'react';
import JobsCardContainer from '../../Components/JobsCardContainer/JobsCardContainer';
import { Pane, Heading } from "evergreen-ui";

const Home = () => {
    return (
      <Pane>
        <Heading size={900}>Job Buddy</Heading>
        <>
          <JobsCardContainer />
        </>
      </Pane>
    );
  }

  export default Home;