import React from "react";
import { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { MerchantCard, PayeeCard, Onboarding } from "../components";

const Home = props => {
  const [accountOption, setAccountOption] = useState();

  console.log(accountOption);

  return (
    <Jumbotron>
      <h1>ORR Playground</h1>
      <p>Demo for account onboarding/updating for ORR</p>

      {accountOption ? <Onboarding capabilities={accountOption} /> : null}

      {accountOption ? null : (
        <div>
          <MerchantCard setAccountOption={setAccountOption} />
        </div>
      )}
      {accountOption ? null : <PayeeCard setAccountOption={setAccountOption} />}
    </Jumbotron>
  );
};

export default Home;
