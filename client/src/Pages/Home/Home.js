import React from 'react';
import JobsCardContainer from '../../Components/JobsCardContainer/JobsCardContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AddJobModal from '../../Components/AddJobModal/AddJobModal';

const Home = () => {
    return (
      <Container>
        <h2>Home</h2>
        <AddJobModal />
        <Row>
          <JobsCardContainer />
        </Row>
      </Container>
    );
  }

  export default Home;