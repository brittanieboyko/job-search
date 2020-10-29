import React from 'react';
import JobsCardContainer from '../../Components/JobsCardContainer/JobsCardContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AddModal from '../../Components/AddModal/AddModal';

const Home = () => {
    return (
      <Container>
        <h2>Home</h2>
        <AddModal />
        <Row>
          <JobsCardContainer />
        </Row>
      </Container>
    );
  }

  export default Home;