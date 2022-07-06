import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
//style
import "./style.css";

const Navigation = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">AZDadsSportsLeague</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Leagues" id="basic-nav-dropdown">
              <NavDropdown.Item href="/baseball">Baseball</NavDropdown.Item>
              <NavDropdown.Item href="/soccer">Soocer</NavDropdown.Item>
              <NavDropdown.Item href="/football">Flag Football
              </NavDropdown.Item>
              <NavDropdown.Item href="/basketball">Basketball</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to="/adminlogin">
      <Button variant="outline-secondary">Admin Login</Button>
      </Link>
    </Navbar>
  );
};

export default Navigation;
