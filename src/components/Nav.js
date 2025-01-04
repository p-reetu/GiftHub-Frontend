import React from "react";
import "./Nav.css";
import logo from "../assets/logo.png";
import searchicon from "../assets/search.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Nav() {
  return (
    <nav className="navbar">
      <Container fluid>
        <Row>
          <Col sm={12} lg={5} className="">
            <a href="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </a>
          </Col>
          <Col className="mx-auto"  lg={7} sm={12}>
            <InputGroup className="m-3" id="search-box">
              <input type="text" className="search-input" placeholder="Search for gift ideas..."/>
              <Button variant="" id="button-addon2">
                <img src={searchicon} />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
