import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="sm"
          className="bg-body-tertiary"
        >
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <NavLink to="/" className="nav-link">
                products
              </NavLink>
              <Nav>
                <NavLink to="/cart" className="ml-auto">
                  <button>
                    <i className="fa fa-shopping-bag"></i>
                  </button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <nav
          className="navbar navbar-expand-sm 
       navbar-dark
       px-sm-5"
        >
          <NavLink to="/">
            <p className="navbar-brand">Home</p>
          </NavLink>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item m -5">
              <NavLink to="/" className="nav-link">
                product
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart" className="ml-auto">
            <button>
              <i className="fa fa-shopping-bag"></i>
            </button>
          </NavLink>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
