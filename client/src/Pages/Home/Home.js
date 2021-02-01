import React from 'react';
import JobsCardContainer from '../../Components/JobsCardContainer/JobsCardContainer';
import NavBar from '../../Components/NavBar/NavBar';
import { Pane, Heading } from "evergreen-ui";

const Home = () => {
    return (
      <Pane>
        <NavBar />
        <Heading size={900}>Job Buddy</Heading>
        <>
          <JobsCardContainer />
        </>
      </Pane>
    );
  }

  export default Home;