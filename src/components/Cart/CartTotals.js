import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartTotals({ value }) {
  const { subtotal, tax, total, clearCart } = value;
  return (
    <Container>
      <Row className="cartTitle">
        <Col
          xs={10}
          sm={8}
          className="left"
          //className="ml-sm-5 mt-2 ml-md-auto"
        >
          <NavLink>
            <button className="clearButton" onClick={() => clearCart()}>
              <p className="mb-0">Clear cart</p>
            </button>
          </NavLink>
          <div className="font2">
            <h4>
              Subtotal: <span className="total">GHS {subtotal}</span>
            </h4>
            <h4>
              Tax: <span className="total"> GHS {tax}</span>
            </h4>
            <h3 className="totals">
              Total: GHS<span> {total}</span>
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartTotals;
