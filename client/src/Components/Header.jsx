import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/kyanon-logo.png";

export default function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={false} bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <h3>Transaction</h3>
                  <Nav.Link href="#action1">Deposit</Nav.Link>
                  <Nav.Link href="#action2">Withdraw</Nav.Link>
                  <Nav.Link href="#action3">Transaction</Nav.Link>
                  <h3>Profile</h3>
                  <Nav.Link href="#action4">Edit Personal</Nav.Link>
                  <Nav.Link href="#action5">Bank Details</Nav.Link>
                  <h3>About Us</h3>
                  <Nav.Link href="#action6">Contact Us</Nav.Link>
                  <Nav.Link href="#action7">Notifications</Nav.Link>
                  <Nav.Link href="#action8">Invite Friends</Nav.Link>
                  <Nav.Link href="https://kyanon.digital/">
                    Offical Website
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* <MenuIcon onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}
