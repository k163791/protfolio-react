import React from "react";
import { Container, Row, Col, Card, Image, ProgressBar } from "react-bootstrap";
import me from "./../assets/images/me1.jpg";

export default function About({ aboutme }) {
  const displayAboutme = () => {
    if (aboutme) {
      return aboutme.split("\n").map(function (item, key) {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      });
    }
  };

  return (
    <Container id="about" style={{ marginBottom: "100px" }}>
      <h1 style={{ color: "#DB4437" }}>About Me</h1>
      <hr />
      <Row style={{ justifyContent: "space-evenly" }}>
        <Col>
          <div style={{ marginBottom: "50px" }}>{displayAboutme()}</div>

          <div>
            <div style={{ marginBottom: "30px" }}>
              <h5>Backend</h5>
              <ProgressBar animated now={90} />
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h5>Database</h5>
              <ProgressBar animated now={80} />
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h5>Front End</h5>
              <ProgressBar animated now={55} />
            </div>
          </div>
        </Col>
        <Col>
          <Image src={me} style={{ height: "100%", width: "100%" }} rounded />
        </Col>
      </Row>
    </Container>
  );
}
