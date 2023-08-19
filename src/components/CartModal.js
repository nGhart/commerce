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
                <div
                  fluid
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey',
                    zIndex: 3,
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <div>
                      <p>Added to Cart</p>
                    </div>
                    <div>
                      <img
                        variant="top"
                        src={hello.modalItem.image}
                        style={{ width: '40%' }}
                      />
                    </div>
                    <div>
                      <p>{hello.modalItem.itemName}</p>
                      <p>GHS {hello.modalItem.price}</p>
                    </div>
                    <div className="modalLinks">
                      <NavLink to="/">
                        <button className="detailLinksButtonContinue">
                          <p className="mb-0">Continue shopping</p>
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
