import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#technologies">Technologies</Nav.Link>
        <Nav.Link href="#contactme">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarMenu;
