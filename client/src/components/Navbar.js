import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="Navbar">
        <Navbar.Brand href="#home">Fashion Avenue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Women" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Outerwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sport Utility Wear
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Men" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Outerwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sport Utility Wear
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kids" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bottoms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Outerwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sport Utility Wear
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Baby" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                Newborn (0-1year){" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Toddler (1-4years)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
