import React from 'react';
import JobsCard from '../../JobsCard/JobsCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
      <Container>
        <h2>Home</h2>
        <Row>
          <JobsCard />
        </Row>
      </Container>
    );
  }