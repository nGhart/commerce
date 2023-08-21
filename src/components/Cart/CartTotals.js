import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartTotals({ value }) {
  const { subtotal, tax, total, clearCart } = value;
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} sm={8} className="ml-sm-5 mt-2 ml-md-auto">
            <NavLink
            // to="/"
            >
              <button
                className="modalButtonContinue"
                onClick={() => clearCart()}
              >
                <p className="mb-0">Clear cart</p>
              </button>
            </NavLink>
            <h3>
              Subtotal: GHS <span className="totals">{subtotal}</span>
            </h3>
            <h3>
              Tax: GHS <span className="totals">{tax}</span>
            </h3>
            <h3>
              Total: GHS <span className="totals">{total}</span>
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartTotals;
