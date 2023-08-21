import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class EmptyCart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <h1 className="title">Cart</h1>
            <h2 className="subtitle font1">Your cart is empty</h2>
            <div className="emptyLinks">
              <NavLink to="/">
                <button className="emptyLinksButton">
                  <p className="mb-0">Continue shopping</p>
                </button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmptyCart;
