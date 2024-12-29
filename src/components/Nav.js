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
          <Col sm={12} lg={5} className="sm-text-center">
            <a href="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </a>
          </Col>
          <Col id="search-box" lg={7}>
            <InputGroup className="mb-3 mt-2" id="search-input">
              <Form.Control
                placeholder="Search for gift ideas..."
                aria-label="Search for gifts"
                aria-describedby="basic-addon2"
              />
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
