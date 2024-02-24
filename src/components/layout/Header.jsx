import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function Header() {
  return (
    <Navbar
      className=""
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Hamro Farm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-6 justify-content-center">
            <NavDropdown title="Categories" id="nav-dropdown">
              <Link to="/product" className="nav-link">
                All
              </Link>
              <NavDropdown.Item eventKey="4.1">
                Fresh Vegetables
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Fresh Fruit</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Fresh Herbs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.3">
                Seasonal Specials
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Link to="/profile" className="nav-link">
              About us
            </Link>
            <Link to="/profile" className="nav-link">
              Login
            </Link>
            <Link to="/profile" className="nav-link">
              <TiShoppingCart />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
