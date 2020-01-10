import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Onboarding = props => {
  const capabilities = props.capabilities;
  const [countries, setCountries] = useState([]);

  console.log(capabilities);

  const submitForm = async ev => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        "/.netlify/functions/createStripeAccount",
        {
          email: ev.target.elements.email_address.value,
          country: ev.target.elements.country.value,
          business_type: ev.target.elements.business_type.value,
          capabilities: capabilities
        }
      );
      window.location.replace(
        `http://localhost:8888/account/${response.data.id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getSupportedCountries = async () => {
      try {
        const response = await axios.get(
          "/.netlify/functions/getSupportedCountries"
        );
        console.log(response.data);
        setCountries(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSupportedCountries();
  }, []);

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="email_address">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="name@example.com"
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="business_type">
        <Form.Label>Business Type</Form.Label>
        <Form.Control as="select">
          <option value="individual">Individual / Sole propriator</option>
          <option value="company">Company</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control as="select" required>
          {countries.map(country => {
            return (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Onboarding;
