import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Default extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Sorry</h1>
              <h3>We couldn't find what you were looking for</h3>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Default;
