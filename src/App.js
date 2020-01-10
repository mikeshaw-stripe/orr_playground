import React from "react";
import { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MerchantCard, PayeeCard, Onboarding } from "./components";
import Home from "./pages/Home";
import AccountView from "./pages/AccountView";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/account/:accountId">
          <AccountView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
