import React from "react";
import { Card, Button } from "react-bootstrap";

const MerchantCard = props => {
  const handleClick = ev => {
    props.setAccountOption("card_payments,transfers");
  };
  return (
    <Card className="text-center">
      <Card.Header>Card Payments</Card.Header>
      <Card.Body>
        <Card.Title>Card Payments Capabilities</Card.Title>
        <Card.Text>
          Use the Card Payments Capability to accept payments
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Onboard as Merchant
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MerchantCard;
