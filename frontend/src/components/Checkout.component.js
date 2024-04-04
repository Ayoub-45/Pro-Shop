import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Checkout({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      {step1 ? (
        <LinkContainer>
          <Nav.Link>Sign in</Nav.Link>
        </LinkContainer>
      ) : (
        <LinkContainer>
          <Nav.Link disabled>Sign in</Nav.Link>
        </LinkContainer>
      )}
    </Nav>
  );
}

export default Checkout;
