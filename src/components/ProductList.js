import React, { Component } from 'react';
import Product from './Product';
import { ContextConsumer } from '../context';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

export class ProductList extends Component {
  render() {
    return (
      <Container>
        <h1>Products</h1>
        <Row xs={2} md={4} className="g-4">
          <ContextConsumer>
            {(hello) => {
              return hello.items.map((item) => {
                return <Product key={item.id} item={item} />;
              });
            }}
          </ContextConsumer>
        </Row>
      </Container>
    );
  }
}

export default ProductList;
