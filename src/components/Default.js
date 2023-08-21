import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Default extends Component {
  render() {
    return (
      <>
        <Container className="errorPage">
          <Row>
            <Col xs={10} className="text-center errorContainer">
              <h1 className="title">Sorry</h1>
              <h3>We couldn't find what you were looking for</h3>
              <div className="emptyLinks">
                <NavLink to="/">
                  <button className="defaultButton">
                    <p className="mb-0">Continue shopping</p>
                  </button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Default;
