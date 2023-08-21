import React, { Component } from 'react';
import Columns from './Columns';
import EmptyCart from './EmptyCart';
import { ContextConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Container from 'react-bootstrap/Container';

export class Cart extends Component {
  render() {
    return (
      <Container>
        <ContextConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <h1 className="title">Cart</h1>
                  <section className="cartContainer">
                    <Columns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </section>
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ContextConsumer>
      </Container>
    );
  }
}

export default Cart;
