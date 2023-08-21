import React, { Component } from 'react';
import styled from 'styled-components';
import { ContextConsumer } from '../context';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export class Product extends Component {
  render() {
    const { image, itemName, price, id, inCart } = this.props.item;
    return (
      <CardStyling>
        <section>
          <ContextConsumer>
            {(hello) => (
              <Col>
                <Card className="cardContainer">
                  <div
                    className="imageContainer"
                    onClick={() => hello.handleDetail(id)}
                  >
                    <NavLink to="/details">
                      <Card.Img variant="top" src={image} className="image" />
                    </NavLink>

                    <button
                      className="cardAddCartButton"
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
                        <i className="fa fa-shopping-bag"></i>
                      )}
                    </button>
                  </div>
                  <Card.Body className="cardBody left">
                    <h2 className="itemName">{itemName}</h2>
                    <p className="currency">
                      GHS <span className="price">{price}</span>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </ContextConsumer>
        </section>
      </CardStyling>
    );
  }
}

export default Product;

const CardStyling = styled.section`
  .cardContainer {
    transition: all 1s linear;
  }
  .cardBody,
  .cardAddCartButton {
    transition: all 1s linear;
  }
  &:hover {
    .cardContainer {
      box-shadow: 2px 2px 5px grey;
    }
  }
  .cardAddCartButton:hover {
    cursor: pointer;
    color: var(--color6);
  }
`;
