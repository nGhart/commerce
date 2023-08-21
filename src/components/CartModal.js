import React, { Component } from 'react';
import { ContextConsumer } from '../context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

export class CartModal extends Component {
  render() {
    return (
      <ContextConsumer>
        {(hello) => {
          if (!hello.openModal) {
            return null;
          } else {
            return (
              <>
                <div className="modalSection">
                  <div className="modalContainer">
                    <div>
                      <p className="title modalName">Added to Cart</p>
                    </div>
                    <div>
                      <img
                        variant="top"
                        src={hello.modalItem.image}
                        style={{ width: '40%' }}
                      />
                    </div>
                    <div>
                      <p className="itemName">{hello.modalItem.itemName}</p>
                      <p className="currency">
                        GHS{' '}
                        <span className="price">{hello.modalItem.price}</span>
                      </p>
                    </div>
                    <div className="modalLinks">
                      <NavLink to="/">
                        <button
                          className="detailLinksButtonContinue"
                          onClick={() => hello.handleCloseModal()}
                        >
                          <p className="mb-0">Continue shopping</p>
                        </button>
                      </NavLink>
                      <NavLink to="/cart">
                        <button
                          className="detailLinksButtonContinue"
                          onClick={() => hello.handleCloseModal()}
                        >
                          <p className="mb-0">Go to Cart</p>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        }}
      </ContextConsumer>
    );
  }
}

export default CartModal;
