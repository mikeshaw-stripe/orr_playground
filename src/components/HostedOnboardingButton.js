import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const HostedOnboardingButton = props => {
  const handleClick = async ev => {
    try {
      const response = await axios.post(
        "/.netlify/functions/createOnboardingLink",
        {
          account: props.accountId,
          type: props.type
        }
      );
      console.log(response.data.url);
      window.location.replace(response.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  const buttonText = () => {
    if (props.type === "create") {
      return "Fill in Details";
    } else if (props.type === "update") {
      return "Update Details";
    } else {
      return "An Error Occured";
    }
  };
  return (
    <Button variant="primary" onClick={handleClick}>
      {buttonText()}
    </Button>
  );
};

export default HostedOnboardingButton;
