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
            <Container className="detailsSection">
              <Card className="detailsContainer">
                <Row>
                  <Col md={8}>
                    <Card.Img
                      variant="top"
                      src={image}
                      className="detailImage"
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title
                        className="itemName"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {itemName}
                        <div>
                          <span className="currency">GHS</span>{' '}
                          <span className="price"> {price}</span>
                        </div>
                      </Card.Title>
                      <Row className="detailLinks font3">
                        <Col xs={6} sm={12}>
                          <NavLink to="/cart">
                            <button
                              className="detailLinksButtonCart"
                              disabled={inCart ? true : false}
                              onClick={() => {
                                hello.handleAddCart(id);
                                hello.handleOpenModal(id);
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
                          <NavLink to="/">
                            <button className="detailLinksButtonContinue">
                              <p className="mb-0">Continue shopping</p>
                            </button>
                          </NavLink>
                        </Col>
                      </Row>

                      <Card.Text className="description">
                        {description}
                      </Card.Text>
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
