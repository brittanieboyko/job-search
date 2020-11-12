import React from 'react';
import JobsCardContainer from '../../Components/JobsCardContainer/JobsCardContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
      <Container>
        <h2>Home</h2>
        <Row>
          <JobsCardContainer />
        </Row>
      </Container>
    );
  }

  export default Home;