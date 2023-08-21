import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Columns() {
  return (
    <>
      <Container fluid className="text-center d-none d-lg-block">
        <Row>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Product</p>
          </Col>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Name</p>
          </Col>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Price</p>
          </Col>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Quantity</p>
          </Col>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Remove</p>
          </Col>
          <Col xs={10} lg={2} className="mx-auto">
            <p>Total</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Columns;
// d - none
