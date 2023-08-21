import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartItem({ item, value }) {
  const { image, itemName, price, description, id, inCart, total, count } =
    item;
  const { increaseCount, decreaseCount, removeItem } = value;
  return (
    <Row className="my-1 text-center">
      <Col xs={10} lg={2} className="mx-auto">
        <img src={image} alt="product" width={50} height={50} />
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <p>{itemName}</p>
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <p>{price}</p>
      </Col>
      <Col xs={10} lg={2} className="mx-auto my-2 my-lg-0">
        <div className="quantityContainer">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              className="mx-1"
              onClick={() => decreaseCount(id)}
              style={{
                padding: '5px',
                backgroundColor: 'var(--color1)',
                border: 'none',
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              style={{
                padding: '5px',
                backgroundColor: 'var(--color1)',
                border: 'none',
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <i>{count}</i>
            </button>
            <button
              className="mx-1"
              onClick={() => increaseCount(id)}
              style={{
                padding: '5px',
                backgroundColor: 'var(--color1)',
                border: 'none',
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <button
          style={{
            padding: '5px',
            backgroundColor: 'transparent',
            color: 'var(--color5)',
            border: 'none',
            width: '30px',
            height: '30px',
          }}
          onClick={() => removeItem(id)}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      </Col>
      <Col xs={10} lg={2} className="mx-auto">
        <p>GHS {total}</p>
      </Col>
      <Col xs={10} lg={12} className="mx-auto">
        <hr></hr>
      </Col>
    </Row>
  );
}

export default CartItem;
