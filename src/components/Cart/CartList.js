import React from 'react';
import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';

function CartList({ value }) {
  const { cart } = value;
  return (
    <>
      <Container>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} value={value} />;
        })}
      </Container>
    </>
  );
}

export default CartList;
