import React from "react";
import { useEffect, useState } from "react";
import { Jumbotron, Form, Col, Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import axios from "axios";
import { HostedOnboardingButton } from "../components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const AccountView = props => {
  let match = useRouteMatch();
  let { accountId } = useParams();
  const [account, setAccount] = useState({});

  useEffect(() => {
    const getAccountDetails = async () => {
      try {
        const response = await axios.get(
          `/.netlify/functions/retrieveAccount?account=${accountId}`
        );
        setAccount(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAccountDetails();
    console.log(account);
  }, [accountId]);

  return (
    <div>
      <Switch>
        <Route path={match.path}>
          <Jumbotron>
            <h1>ORR Playground</h1>
            <h3>Account Summary</h3>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Charges Enabled</Form.Label>
                  <Form.Control
                    type="text"
                    value={account.charges_enabled}
                    isValid={account.charges_enabled}
                    isInvalid={!account.charges_enabled}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Payouts Enabled</Form.Label>
                  <Form.Control
                    type="text"
                    value={account.payouts_enabled}
                    isValid={account.payouts_enabled}
                    isInvalid={!account.payouts_enabled}
                  />
                </Form.Group>
              </Form.Row>
            </Form>

            <Row>
              <Col>
                <HostedOnboardingButton accountId={account.id} type="create" />
              </Col>
              <Col>
                <HostedOnboardingButton accountId={account.id} type="update" />
              </Col>
            </Row>
            <h3>Account Details</h3>
            <SyntaxHighlighter language="javascript" style={xonokai}>
              {JSON.stringify(account, null, 2)}
            </SyntaxHighlighter>
          </Jumbotron>
        </Route>
      </Switch>
    </div>
  );
};

export default AccountView;
