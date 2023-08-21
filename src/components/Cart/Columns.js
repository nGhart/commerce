import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Columns() {
  return (
    <>
      <Container className="text-center d-none d-md-block">
        <Row className="my-1 cartTitle font5">
          <Col xs={10} md={2}>
            <div>Product</div>
          </Col>
          <Col xs={10} md={2} className="mx-auto">
            <p className="mb-0">Name</p>
          </Col>
          <Col xs={10} md={2} className="mx-auto">
            <p className="mb-0">Price</p>
          </Col>
          <Col xs={10} md={2} className="mx-auto">
            <p className="mb-0">Quantity</p>
          </Col>
          <Col xs={10} md={2} className="mx-auto">
            <p className="mb-0">Remove</p>
          </Col>
          <Col xs={10} md={2} className="mx-auto">
            <p className="mb-0">Total</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Columns;
