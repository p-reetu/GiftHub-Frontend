import React from "react";
import "./Main.css";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Main(props) {
  return (
    <Container className="card-container" fluid>
      <Row>
        {props.gifts.map((e) => (
          <Card gift={e} key={e.id} />
        ))}
      </Row>
    </Container>
  );
}
