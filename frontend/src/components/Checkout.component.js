import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item className="mx-4 ">
        {step1 ? (
          <LinkContainer to="/login">
            <NavLink>Sign-in</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Sign in</NavLink>
        )}
      </Nav.Item>
      <Nav.Item className="mx-4 ">
        {step2 ? (
          <LinkContainer to="/shipping">
            <NavLink>Shipping</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled> Shipping</NavLink>
        )}
      </Nav.Item>
      <Nav.Item className="mx-4 ">
        {step3 ? (
          <LinkContainer to="/payment">
            <NavLink>Payment</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled> Payment</NavLink>
        )}
      </Nav.Item>
      <Nav.Item className="mx-4 ">
        {step4 ? (
          <LinkContainer to="/placeorder">
            <NavLink>Place Order</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled> Place Order</NavLink>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
