import React from "react";
import { Button, Card } from "react-bootstrap";

const PayeeCard = props => {
  const handleClick = ev => {
    props.setAccountOption("transfers");
  };
  return (
    <Card className="text-center">
      <Card.Header>Transfers</Card.Header>
      <Card.Body>
        <Card.Title>Transfers Capabilities</Card.Title>
        <Card.Text>Use the Transfers Capability to get paid out</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Onboard as Payee
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PayeeCard;
