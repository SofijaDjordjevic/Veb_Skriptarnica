import React from 'react'
import logo from '../assets/logo.png'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import { Badge, Nav, Navbar, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

const Header = () => {
 const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="FTN Skriptarnica"
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />

              <span className="fw-semibold">
                Skriptarnica
              </span>{" "}
              Fakulteta tehničkih nauka u Novom Sadu
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Korpa

                  {cartItems.length > 0 && (
                    <Badge
                      pill
                      bg="success"
                      style={{ marginLeft: "5px" }}
                    >
                      {cartItems.reduce(
                        (a, c) => a + c.qty,
                        0
                      )}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Prijava
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;