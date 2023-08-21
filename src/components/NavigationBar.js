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
                  <button className="cartButton">
                    <i className="fa fa-shopping-bag"></i>
                  </button>
                </NavLink>
              </Nav>
            </Container>
          </Navbar>

          <p className="navbar-brand">Home</p>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
