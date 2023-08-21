import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class EmptyCart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <h2>Your cart is empty</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmptyCart;
