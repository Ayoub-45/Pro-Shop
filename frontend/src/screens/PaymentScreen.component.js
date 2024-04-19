import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer.component";
import CheckoutSteps from "../components/Checkout.component";
import { Form, Button, Col } from "react-bootstrap";
function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>payment Method</h1>
      <Form>
        <Form.Group>
          <Form.Label as="legend">Form</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Paypal or Credit Card"
              id="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="dark">
          continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
