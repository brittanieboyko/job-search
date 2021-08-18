import React from "react";
import "./AddJobCard.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddJobCard = ({ onClick }) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Button onClick={onClick}>
            <FontAwesomeIcon className="add-icon" icon={faPlus} />
            Add A Job
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddJobCard;
