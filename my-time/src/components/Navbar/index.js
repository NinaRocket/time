import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import "./style.css";
import Logo from "../../assets/redicon.png";

const Navbarr = ({ element }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="temp logo"
        />
      </Navbar.Brand>
      <Navbar.Text className="title">When do I clock out?</Navbar.Text>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
      {/* <Nav className="mr-auto">
        <Nav.Link className="title" href="#home">
          When do I clock out?
        </Nav.Link>
      </Nav> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Navbarr;
