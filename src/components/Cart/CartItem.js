import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartItem({ item, value }) {
  const { image, itemName, price, id, total, count } = item;
  const { increaseCount, decreaseCount, removeItem } = value;
  return (
    <>
      <Row className="my-1 text-center cartRow">
        <Col
          xs={3}
          md={2}
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={image} alt="product" width={50} height={50} />
        </Col>
        <Col
          xs={4}
          md={2}
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            className="itemName mb-0"
            style={{ width: '100%', textAlign: 'left' }}
          >
            {itemName}
          </p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className="currency mb-0">
            GHS <span className="price">{price}</span>
          </p>
        </Col>
        <Col
          xs={8}
          md={2}
          className="mx-auto my-2 my-md-0"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
                  backgroundColor: 'var(--color6)',
                  color: 'var(--color3)',
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
        <Col
          xs={3}
          md={2}
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              padding: '5px',
              backgroundColor: 'transparent',
              color: 'red',
              border: 'none',
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            onClick={() => removeItem(id)}
          >
            <i className="fa fa-trash-alt"></i>
          </button>
        </Col>
        <Col
          xs={10}
          md={2}
          className="mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            className="currency mb-0"
            style={
              {
                // padding: '5px',
                // backgroundColor: 'transparent',
                // color: 'var(--color5)',
                // border: 'none',
                // width: '30px',
                // height: '30px',
                // backgroundColor: 'pink',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100%',
              }
            }
          >
            <span className="d-md-none">Total: </span>GHS{' '}
            <span className="price">{total}</span>
          </p>
        </Col>
      </Row>
      <hr className="d-md-none"></hr>
    </>
  );
}

export default CartItem;
