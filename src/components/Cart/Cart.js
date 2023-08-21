import React, { Component } from 'react';
import Columns from './Columns';
import EmptyCart from './EmptyCart';
import { ContextConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export class Cart extends Component {
  render() {
    return (
      <div>
        <ContextConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <h1>Cart</h1>
                  <Columns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ContextConsumer>
      </div>
    );
  }
}

export default Cart;
