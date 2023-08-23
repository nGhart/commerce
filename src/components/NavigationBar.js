import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class NavigationBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm px-sm-5">
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="sm"
            className="bg-body-tertiary navbarSection"
            style={{ padding: 0 }}
          >
            <Container className="navbarContainer" fluid>
              <NavLink to="/" className="nav-link">
                <h1 className="mb-0 title">Store</h1>
              </NavLink>
              <Nav>
                <NavLink to="/cart" className="ml-auto">
                  <button
                    className="cartButton"
                    style={{ position: 'relative' }}
                  >
                    {/* <div
                      text="dark"
                      style={{
                        position: 'absolute',
                        bottom: -5,
                        right: -5,
                        width: '15px',
                        height: '15px',
                        fontSize: '10px',
                        fontWeight: '700',
                        backgroundColor: 'var(--color2)',
                        border: '2px solid var(--color7)',
                        zIndex: '2',
                        borderRadius: '50%',
                        color: 'var(--color7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <p style={{ margin: 0, padding: 0 }}></p>
                    </div> */}
                    <i
                      className="fa fa-shopping-bag"
                      style={{ position: 'absolute' }}
                    ></i>
                  </button>
                </NavLink>
              </Nav>
            </Container>
          </Navbar>

          <p className="navbar-brand">.</p>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
