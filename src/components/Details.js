import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextConsumer } from '../context';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

class Details extends Component {
  render() {
    return (
      <ContextConsumer>
        {(hello) => {
          const { id, image, itemName, price, description, inCart } =
            hello.singleItem;
          return (
            <Container>
              <Card>
                <Row>
                  <Col md={8}>
                    <Card.Img variant="top" src={image} />
                  </Col>

                  <Col>
                    {' '}
                    <Card.Body>
                      <Card.Title
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {itemName} <span>GHS {price}</span>
                      </Card.Title>
                      <Row className="detailLinks">
                        <Col xs={9}>
                          <NavLink
                          // to="/cart"
                          >
                            <button
                              className="detailLinksButtonCart"
                              disabled={inCart ? true : false}
                              onClick={() => {
                                hello.handleAddCart(id);
                                hello.modal(id);
                              }}
                            >
                              {inCart ? (
                                <p className="mb-0" disabled>
                                  Added to Cart
                                </p>
                              ) : (
                                <p className="mb-0">Add to Cart</p>
                              )}
                            </button>
                          </NavLink>
                        </Col>
                        <Col>
                          <NavLink>
                            <button className="detailFav">
                              <i className="fa fa-heart"></i>
                            </button>
                          </NavLink>
                        </Col>
                      </Row>
                      <NavLink to="/">
                        <button className="detailLinksButtonContinue">
                          <p className="mb-0">Continue shopping</p>
                        </button>
                      </NavLink>

                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Container>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default Details;